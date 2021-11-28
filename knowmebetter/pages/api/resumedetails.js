import dbConnect from '../../utils/dbConnect';
import ResumeDetail from '../../models/ResumeDetail';




dbConnect()

// export default async (req, res) => {
//     const { method } = req;

//     switch (method) {
//         case 'GET':
//             try {
//                 const notes = await Note.find({});
//                 res.status(200).json({ success: true, data: ResumeDetail })
//             } catch (error) {
//                 res.status(400).jsono({ success: false });

//             }
//             break;
//         case 'POST':
//             try {
//                 const ResumeDetail = await ResumeDetail.create(req.body);
//                 res.status(201).json({ success: true, data: ResumeDetail })
//             }
//             catch (error) {
//                 res.status(400).json({ success: false });
//             }
//             break;
//         default:
//             res.status(400).json({ success: false });
//             break;
//     }
// }