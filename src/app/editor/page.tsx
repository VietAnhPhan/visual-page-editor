// app/editor/page.tsx
"use client";

import { Puck } from "@measured/puck";
import "@measured/puck/puck.css"; // Important: Load Puck styles
import config from "../../../puck.config";

// Initial data (empty page)
const initialData = {
  content: [],
  root: {},
};

export default function EditorPage() {
  return (
    <Puck
      config={config}
      data={initialData}
      onPublish={(data) => {
        console.log("Saving to DB:", data);
        // Here you would fetch('/api/save', { body: JSON.stringify(data) })
      }}
    />
  );
}