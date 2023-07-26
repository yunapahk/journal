const Router = require('express').Router
const controller = require('../controllers/entry') 

const router = Router()

            // ROUTES // 

// INDEX //
router.get("/", controller.index)

// NEW //
router.get("/new", controller.new)

// DESTROY //
router.delete("/:id", controller.destroy)

// UPDATE //
router.put("/:id", controller.update)

// CREATE //
router.post("/", controller.create)

//  EDIT //
router.get("/:id/edit", controller.edit)

// SHOW //
router.get("/:id", controller.show)

module.exports = router;