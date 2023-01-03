const {Router} = require ("express");
const router = Router();
const filmsCtrl = require("../controller/filmCtrl");

router.get("/films", filmsCtrl.getFilms)
router.get("/popular", filmsCtrl.getPopular)
router.get("/rated", filmsCtrl.getTopRated)
router.get("/new", filmsCtrl.getNew)
router.get("/search", filmsCtrl.getSearch)

module.exports = router;