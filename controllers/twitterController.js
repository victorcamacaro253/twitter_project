//import twitterModel from '../models/twitterModel.js'
import { getUserTimeline,getUserData } from '../models/twitterModel.js';

class twitterController {

static showUserTimeline= async (req,res) => {
    const {username} = req.params
   try {

    const tweets = await getUserTimeline(username)
    if(tweets.length===0){
        return res.status(404).json({ error: 'Perfil no encontrado' });

    }

    res.json(tweets)
    
   } catch (error) {
    console.log(error)
    res.status(500).send('Error al obtener el timeline');

    
   }


    }


    static getUserData = async (req, res) => {
        const { username } = req.params;
        try {
            const userData = await getUserData(username);
            console.log(userData)
            if (!userData) {
                return res.status(404).json({ error: 'Perfil no encontrado' });
                }


         const meta ={
            user_id : userData.id,
            Username: userData.username,
            name: userData.name,
            Bio: userData.description,
            Profile: userData.profile_image_url,
            URL: userData.url,
         }
console.log(meta)
                res.json(meta);
                } catch (error) {
                    console.log(error);
                    res.status(500).send('Error al obtener los datos del usuario');
                    }

        

}

}


export default twitterController