import {db} from "../config/db.config.js"; //appel de la connexion à la bd dans le controleur


//execution de la requete pour obtenir tous les tutos
export const getTuto = (_, res)=>{
  const q="SELECT * FROM tutorials";

  db.query(q, (err,data)=>{
      if (err) return res.json(data);
      return res.status(200).json(data);
  });
}



//execution de la requete pour obtenir un seul TUTO
export const getOneTuto = (req,res)=>{
  const q="SELECT * FROM tutorials WHERE id=?";

  db.query(q,req.params.id, (err,data)=>{
      if (err) return res.json(data);
      return res.status(200).json(data);
  });
}







//créer un TUTO
export const createTuto = (req, res)=>{
  const q="INSERT INTO tutorials (`title`,`description`,`published`,`createdAt`,`updatedAt`) VALUES(?)";
  
  const tutorial = [
    req.body.title,
    req.body.description,
    req.body.published ? req.body.published : false,
    new Date(),
    req.body.updatedAt
  ];

  db.query(q, [tutorial],(err)=>{
      if (err) return res.json(err);
      console.log(tutorial);
      return res.status(200).json("ok");
  });
}






export const updateTuto = (req, res)=>{
  const q="UPDATE tutorials SET `title`=?,`description`=?,`published`=?,`createdAt`=?,`updatedAt`=? WHERE `id`=?";
  
  const tutorial = [
    req.body.title,
    req.body.description,
    req.body.published ? req.body.published : false,
    req.body.createdAt,
    new Date()
  ];

  db.query(q, [...tutorial,req.params.id],(err)=>{
      if (err) return res.json(err);
      return res.status(200).json("okup");
  });
}



//supprimer 1 tuto
export const deleteOneTuto = (req, res)=>{
  const q="DELETE FROM tutorials WHERE `id`=?";

  db.query(q, [req.params.id],(err)=>{
      if (err) return res.json(err);
      return res.status(200).json("okdel");
  });
}



//supprimer tout
export const deleteTuto = (_,res)=>{
  const q="DELETE FROM tutorials";

  db.query(q,(err)=>{
      if (err) return res.json(err);
      return res.status(200).json("okdelall");
  });
}








//execution de la requete pour obtenir un tuto
/*export const getOneTuto = (id)=>{
  const q="SELECT * FROM tutorials where id=?";

  db.query(q,id, (err,data)=>{
      if (err) return res.json(data);
      return res.status(200).json(data);
  });
}*/






/*Employee.create = function (newEmp, result) {
  dbConn.query("INSERT INTO employees set ?", newEmp, function (err, res) {
    if(err) { 
       console.log("error: ", err);  result(err, null);
    }else{
        console.log(res.insertId);  result(null, res.insertId);
      }
    });
  };*/









// with placeholder
/*connection.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  function(err, results) {
    console.log(results);
  }
);*/