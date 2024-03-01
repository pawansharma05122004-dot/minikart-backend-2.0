import Router from 'express'
import { getBuyDetails } from './purchase.contoller.js'

const purchaseRouter = Router()

// purchaseRouter.route('/postPurchaseItem').post(postBuyDetails)
purchaseRouter.route('/getPurchaseItem').post(getBuyDetails)

export default purchaseRouter;