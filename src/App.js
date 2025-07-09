import React, { useState, useEffect } from "react";

// ตั้งค่าห้องประชุม
const MEETING_ROOMS = [
  { name: "ไพลิน", capacity: 20 },
  { name: "วิบูลย์", capacity: 20 },
  { name: "กรรณิการ์", capacity: 10 },
  { name: "วิไลวรรณ", capacity: 10 },
  { name: "อินทนิล", capacity: 6 },
  { name: "ศรีวิลัย", capacity: 6 },
];

const LOCAL_STORAGE_KEY = "meeting-bookings-v1";

// ฟังก์ชันอ่าน/เขียนข้อมูลจาก localStorage
function loadBookings() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}
function saveBookings(data) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}
function isTimeOverlap(aStart, aEnd, bStart, bEnd) {
  return aStart < bEnd && aEnd > bStart;
}

function formatDate(date) {
  // yyyy-mm-dd
  return date.toISOString().split("T")[0];
}

export default function App() {
  const [date, setDate] = useState(() => new Date());
  const [bookings, setBookings] = useState(() => loadBookings());
  const [form, setForm] = useState({
    name: "",
    phone: "",
    purpose: "",
    room: "",
    date: formatDate(new Date()),
    start: "",
    end: "",
  });
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  c
