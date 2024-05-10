// import { useContext, useState } from "react";
// import { Listbox } from "@headlessui/react";
// import { BookContext } from "../../data/BookProvider/BookProvider";
// import { BookContextType } from "../../types";

// const people = [
//   { id: 1, name: "Books" },
//   { id: 2, name: "Authors" },
// ];

// export const MyListbox = () => {
// //   const { selectedSearch, setSelectedSearch } = useContext(
// //     BookContext
// //   ) as BookContextType;

//   const handleChange = (value: any) => {
//     setSelectedSearch(value);
//   };

//   return (
//     <Listbox value={selectedSearch} onChange={handleChange}>
//       <Listbox.Button>{selectedSearch}</Listbox.Button>
//       <Listbox.Options>
//         {people.map((person) => (
//           <Listbox.Option key={person.id} value={person}>
//             {person.name}
//           </Listbox.Option>
//         ))}
//       </Listbox.Options>
//     </Listbox>
//   );
// };
