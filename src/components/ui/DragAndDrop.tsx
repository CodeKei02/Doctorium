import React, { useEffect, useMemo, useRef, useState } from "react";
import "@atlaskit/pragmatic-drag-and-drop";
import {
  draggable,
  dropTargetForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { Btn } from "./Button";

type Appointment = {
  id: string;
  patient: string;
  time: string; // formato HH:mm
};

// Genera intervalos de 30 minutos en formato HH:mm
function generateHalfHourTimes(start = 8, end = 18) {
  const slots: string[] = [];
  for (let h = start; h <= end; h++) {
    for (let m of [0, 30]) {
      const time = `${String(h).padStart(2, "0")}:${String(m).padStart(
        2,
        "0"
      )}`;
      slots.push(time);
    }
  }
  return slots;
}

// Tarjeta draggable de cita
function AppointmentCard({ appt }: { appt: Appointment }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return draggable({
      element: el,
      getInitialData: () => ({ appointmentId: appt.id }),
    });
  }, [appt.id]);

  return (
    <div
      ref={ref}
      className="cursor-move select-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm hover:shadow"
    >
      <div className="font-medium text-gray-900">{appt.patient}</div>
      <div className="text-xs text-gray-500">{appt.time}</div>
    </div>
  );
}

// Zona de drop por horario
function TimeDropSlot({
  time,
  children,
  onDropToTime,
}: {
  time: string;
  children?: React.ReactNode;
  onDropToTime: (args: { appointmentId: string; time: string }) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return dropTargetForElements({
      element: el,
      getData: () => ({ time }),
      onDragEnter: () => setIsOver(true),
      onDragLeave: () => setIsOver(false),
      onDrop: ({ source }) => {
        setIsOver(false);
        const appointmentId = (source.data as any)?.appointmentId as
          | string
          | undefined;
        if (appointmentId) onDropToTime({ appointmentId, time });
      },
    });
  }, [time, onDropToTime]);

  return (
    <div
      ref={ref}
      className={`min-h-14 w-full rounded-md border px-3 py-2 transition-colors ${
        isOver ? "border-primary bg-blue-50" : "border-gray-200 bg-gray-50"
      }`}
    >
      {children}
    </div>
  );
}

export default function DragAndDrop() {
  // Ejemplo de citas iniciales
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: "a1", patient: "María E. Rodriguez", time: "09:00" },
    { id: "a2", patient: "Carlos Pérez", time: "10:30" },
    { id: "a3", patient: "Ana Torres", time: "14:00" },
  ]);

  const timeSlots = useMemo(() => generateHalfHourTimes(8, 18), []);

  const reschedule = ({
    appointmentId,
    time,
  }: {
    appointmentId: string;
    time: string;
  }) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === appointmentId ? { ...a, time } : a))
    );
  };

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex justify-between w-full">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          Reprogramar citas
        </h2>
        {/* Implement a modal for adding new appointments */}
        <Btn onClick={() => {}}>Agregar cita</Btn>
      </div>

      <div className="grid grid-cols-[80px_1fr] items-start gap-3">
        {timeSlots.map((t) => {
          const apptsAtTime = appointments.filter((a) => a.time === t);
          return (
            <React.Fragment key={t}>
              <div className="pt-2 text-right text-xs text-gray-500">{t}</div>
              <TimeDropSlot time={t} onDropToTime={reschedule}>
                <div className="flex flex-col gap-2">
                  {apptsAtTime.map((a) => (
                    <AppointmentCard key={a.id} appt={a} />
                  ))}
                </div>
              </TimeDropSlot>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
