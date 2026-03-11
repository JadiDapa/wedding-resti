import {
  Home,
  Settings,
  ListX,
  CheckCircle,
  Image,
  CircuitBoard,
} from "lucide-react";

export const overviewItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Rekapan Dokumentasi",
    url: "/staffs",
    icon: Image,
  },
  {
    title: "Berita Acara",
    url: "/berita-acara",
    icon: CheckCircle,
  },
  {
    title: "Absensi",
    url: "/absesnsi",
    icon: ListX,
  },
  {
    title: "Detail Layanan",
    url: "/detail-layanan",
    icon: CircuitBoard,
  },
];

export const settingsItems = [
  {
    title: "Pengaturan",
    url: "/settings",
    icon: Settings,
  },
];
