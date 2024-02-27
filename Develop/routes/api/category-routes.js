const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const allCats= await Category.findAll({
    include: [Product]
  });

  res.status(200).json(allCats);
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const oneCat = await Category.findOne({
    where: {id: req.params.id},
    include: [Product]
  });

  res.status(200).json(oneCat);
});

router.post('/', async(req, res) => {
  // create a new category
  const newCat = await Category.create(req.body,{
  });

  res.status(200).json(newCat);
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  const oneCat = await Category.update(req.body,{
    where: {id: req.params.id},
  });

  res.status(200).json(oneCat);
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  const oneCat = await Category.destroy({
    where: {id: req.params.id}
  });

  res.status(200).json(oneCat);
});

module.exports = router;
