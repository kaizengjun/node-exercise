function parseFiled (field) {
  return field.split(/\[|\]/).filter(s => s);
}

function getField (req, field) {
  let val = req.body;
  field.forEach(prop => {
    val = val[prop];
  });
  return val;
}

exports.required = (field) => {
  field = parseFiled(field);
  return (req, res, next) => {
    if (getField(req, field)) {
      next();
    } else {
      res.status(500).send(`${field.join(' ')} is required`);
      res.redirect('back');
    }
  };
};

exports.lengthAbove = (field, len) => {
  field = parseFiled(field);
  return (req, res, next) => {
    if (getField(req, field).length > len) {
      next();
    } else {
      const fields = field.join(' ');
      res.status(500).send(`${fields} must have more than ${len} characters`);
      res.redirect('back');
    }
  }
}