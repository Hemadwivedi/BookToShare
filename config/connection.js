const Sequelize=require('sequelize');
const sequilize=new Sequelize('book_db','root','password',{
  dialect:'mysql',
  host:'localhost'
 });
 module.exports=sequilize;