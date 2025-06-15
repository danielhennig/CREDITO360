const express = require('express');
const router = express.Router();

const ofertaController = require('../controllers/ofertaController');
const validarCampos = require('../middlewares/validarCamposObrigatorios');
const validarConsentimento = require('../middlewares/validarConsentimento');
const authMiddleware = require('../middlewares/authMiddleware');

// ✅ Criar oferta de crédito com validação de campos obrigatórios
router.post(
    '/',
    validarCampos(['nome', 'descricao', 'taxaJuros', 'numeroParcelas', 'valor', 'scoreMinimo']),
    ofertaController.criarOferta
);

// ✅ Listar todas as ofertas (sem restrição)
router.get('/', ofertaController.listarOfertas);

// ✅ Listar ofertas recomendadas (requer consentimento ativo)
router.get(
    '/recomendadas/:score',
    
    ofertaController.ofertasRecomendadas
);


// ✅ Atualizar oferta
router.put('/:id', ofertaController.atualizarOferta);

// ✅ Excluir oferta
router.delete('/:id', ofertaController.excluirOferta);

module.exports = router;
