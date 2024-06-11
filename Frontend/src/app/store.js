import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from '../slices/login/LoginSlice'
import ComprasSlice from '../slices/compras/ComprasSlice'
import HabilitaduriaSlice from '../slices/habilitaruria/HabilitaduriaSlice'
import ContabilidadSlice from '../slices/contabilidad/ContabilidadSlice'
import PresupuestoSlice from '../slices/presupuesto/PresupuestoSlice'

export default configureStore({
  reducer: {
    login:LoginSlice,
    compras:ComprasSlice,
    habilitaduria:HabilitaduriaSlice,
    contabilidad:ContabilidadSlice,
    presupuesto:PresupuestoSlice
  }
})