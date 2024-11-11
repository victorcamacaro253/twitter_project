import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv';

dotenv.config(); // Asegúrate de haber instalado dotenv con `npm install dotenv`

// Usamos solo el Bearer Token para la autenticación
const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);


// Función para obtener el timeline de un usuario
export async function getUserTimeline(username) {
  try {
    // Obtiene el ID del usuario por su nombre de usuario
    const user = await client.v2.userByUsername(username);
    const userId = user.data.id;
    console.log('User ID:', userId);

    // Realiza la solicitud para obtener los tweets del timeline del usuario
    const tweets = await client.v2.userTimeline(userId, {
      max_results: 10, // Puedes ajustar el número de tweets
      "tweet.fields": "created_at,text", // Campos adicionales si los necesitas
    });

    return tweets.data;
  } catch (error) {
    console.error('Error al obtener el timeline:', error);
    throw error;
  }
}


export async function getUserData(username) {
try {
    const user = await client.v2.userByUsername(username);

    return user.data
     
    }catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
    
    }
} 


