const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const allTags= await Tag.findAll({
    include: [{ model: Product, through: ProductTag}]
  });

  // be sure to include its associated Category and Tag data
  res.status(200).json(allTags);
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const oneTag = await Tag.findOne({
    where: {id: req.params.id},
    include: [{ model: Product, through: ProductTag}]
  });

  // be sure to include its associated Category and Tag data
  res.status(200).json(oneTag);
});

router.post('/', async(req, res) => {
  const newTag = await Tag.create(req.body,{
  });

  res.status(200).json(newTag);
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  const oneTag = await Tag.update(req.body,{
    where: {id: req.params.id},
  });

  // be sure to include its associated Category and Tag data
  res.status(200).json(oneTag);
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  const oneTag = await Tag.destroy({
    where: {id: req.params.id}
  });

  res.status(200).json(oneTag);
});

module.exports = router;
