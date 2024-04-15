const filterEntries = (entries, term, type) => {
   const normalizedSearchTerm = term.toLowerCase().trim();
 
   if (normalizedSearchTerm === "") {
     return entries;
   } else {
     return entries.filter((entry) => {
       const entryField = entry[type].toLowerCase();
       return entryField.includes(normalizedSearchTerm);
     });
   }
 };
 
 export default filterEntries;
 