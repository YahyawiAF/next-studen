import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect'

const app = nc<NextApiRequest, NextApiResponse>({
    onError: (err,req,res,next) => {
       console.error(err.stack);
       res.status(500).end("Something broke!");
    },
    onNoMatch: (req,res) => {
       res.status(404).end("Page is not found")
    }
})



app.get((req,res) => {
  const { id,profile } = req.query
  if(id) return API.fetchSubject(req,res)  // FETCH DATA BY STUDENTID
  else if(profile) return API.fetchSubjectInfo(req,res)  // FETCH DATA BY STUDENTID
  else return API.fetchSubjects(req,res)  // FETCH ALL DATA
})

app.post((req,res) => {
  return API.postSubject(req,res)  // FETCH DATA BY STUDENTID
})

app.delete((req,res) => {
   return API.deleteSubject(req,res)  // FETCH DATA BY STUDENTID
 })
 
export default app;
