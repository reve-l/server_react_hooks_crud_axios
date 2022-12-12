import {db} from "../config/db.config.js"; //appel de la connexion à la bd dans le controleur


//execution de la requete pour obtenir tous les tutos
export const getTuto = (_, res)=>{
  const q="SELECT * FROM tutorials";

  db.query(q, (err,data)=>{
      if (err) return res.json(data);
      return res.status(200).json(data);
  });
}


export const createTuto = (req, res)=>{
  const q="INSERT INTO tutorials (`title`,`description`,`published`,`createdAt`,`updatedAt`) VALUES(?)";
  
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  db.query(q, [tutorial],(err)=>{
      if (err) return res.json(err);
      return res.status(200).json("ok");
  });
}






export const updateTuto = (req, res)=>{
  const q="UPDATE tutorials SET `title`=?,`description`=?,`published`=?,`createdAt`=?,`updateAt`=? WHERE `id`=?";
  
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt
  };

  db.query(q, [...tutorial,req.params.id],(err)=>{
      if (err) return res.json(err);
      return res.status(200).json("okup");
  });
}



export const deleteTuto = (req, res)=>{
  const q="DELETE FROM tutorials WHERE `id`=?";

  db.query(q, [req.params.id],(err)=>{
      if (err) return res.json(err);
      return res.status(200).json("okdel");
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