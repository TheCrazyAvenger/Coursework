const ClassTypesDbController = require('../db-controllers/class-types-db-controller');

const getClassTypes = async (_, res, next) => {
  let classTypes;

  try {
    classTypes = await ClassTypesDbController.getClassTypes();
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: classTypes,
  });
};

const addClassType = async (req, res, next) => {
  const {typeName} = req.body;

  try {
    ClassTypesDbController.addClassType(typeName);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: [{message: 'Successfull'}],
  });
};

const removeClassTypeById = async (req, res, next) => {
  const {typeId} = req.body;

  try {
    ClassTypesDbController.removeClassTypeById(typeId);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: [{message: 'Successfull'}],
  });
};

module.exports = {getClassTypes, addClassType, removeClassTypeById};
