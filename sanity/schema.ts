export const Test = {};

// // medications schema
// export const Medication = {
//   name: 'medication',
//   type: 'document',
//   title: 'Medication',
//   fields: [
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Name',
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'description',
//       type: 'text',
//       title: 'Description',
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'categories',
//       type: 'array',
//       title: 'Categories',
//       of: [{ type: 'reference', to: { type: 'medicationCategory' } }],
//       validation: Rule => Rule.unique(),
//     },
//   ],
// }

// // medication categories schema
// export const Category = {
//   name: 'medicationCategory',
//   type: 'document',
//   title: 'Medication Category',
//   fields: [
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Name',
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'description',
//       type: 'text',
//       title: 'Description',
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'medications',
//       type: 'array',
//       title: 'Medications',
//       of: [{ type: 'reference', to: { type: 'medication' } }],
//     },
//   ],
// }
