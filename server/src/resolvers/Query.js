const queries = {
  info: ()=> `this is UDDAD API`,
  users: (parent,args,ctx,info)=>{
    return ctx.db.query.users({},info)
  }
};

module.exports = queries;
