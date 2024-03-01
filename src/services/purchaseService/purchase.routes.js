import Router from 'express'
import { postBuyDetails } from './purchase.contoller.js'

const purchaseRouter = Router()

purchaseRouter.route('/postPurchaseItem').post(postBuyDetails)

export default purchaseRouter;