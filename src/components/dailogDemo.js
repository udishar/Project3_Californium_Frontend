import React,{useState} from 'react';


export default function DailogDemo() {
  const [open, setOpen] = useState(true);
  return <SimpleDialog open={open} />;
}
