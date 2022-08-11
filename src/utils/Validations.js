

const isPhone = (phone) => {
  var exp = /^\d+$/;
  return exp.test(phone);
}



export default {
  isPhone,
}

