module.exports = {
    index(req, res) {
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const passaword = req.body.password;

        // console.log(`room = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${passaword}`)
    }
}