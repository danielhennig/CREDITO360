const express = require('express');
const router = express.Router();

const ofertaController = require('../controllers/ofertaController');
const validarCampos = require('../middlewares/validarCamposObrigatorios');
const validarConsentimento = require('../middlewares/validarConsentimento');
const authMiddleware = require('../middlewares/authMiddleware');


router.post(
    '/',
    validarCampos(['nome', 'descricao', 'taxaJuros', 'numeroParcelas', 'valor', 'scoreMinimo']),
    ofertaController.criarOferta
);


router.get('/', ofertaController.listarOfertas);


router.get(
    '/recomendadas/:score',
    
    ofertaController.ofertasRecomendadas
);



router.put('/:id', ofertaController.atualizarOferta);


router.delete('/:id', ofertaController.excluirOferta);

module.exports = router;
