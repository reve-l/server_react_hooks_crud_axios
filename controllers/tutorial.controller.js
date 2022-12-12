import {db} from "../config/db.config"; //appel de la connexion à la bd dans le controleur


//execution de la requete pour obtenir tous les tutos
export const getTuto = (_, res)=>{
  const q="SELECT * FROM reacthookscrud";

  db.query(q, (err,data)=>{
      if (err) return res.json(data);
      return res.status(200).json(data);
  });

}