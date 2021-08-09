// /api/new-meetup

function handler(req, res){
    if (req.method === 'POST'){
        const data = res.body;

        const {title, image, address, description} = data;
    }
}

export default handler;