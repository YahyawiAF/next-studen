import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import API from '../../backend/controller/apiController';

const app = nc<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    }
});

app.get(async (req, res) => {
    const { id, teachinfo } = req.query;

    if (id) {
        return API.fetchTeacher(req, res);  // FETCH DATA BY TeacherID
    } else if (teachinfo) {
        return API.fetchTeacherInfo(req, res);  // FETCH DATA BY TeacherID
    } else {
        return API.fetchTeachers(req, res);  // FETCH ALL DATA
    }
});

app.post(async (req, res) => {
    return API.postTeachers(req, res);  // POST DATA
});

app.delete(async (req, res) => {
    return API.deleteTeacher(req, res);  // DELETE DATA BY TeacherID
});

export default app;