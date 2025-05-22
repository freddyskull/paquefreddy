import { Cable } from 'lucide-react'
import React from 'react'

export const ErrorConexion = () => {
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <Cable className="text-slate-500" size={100} strokeWidth='1' />
            <h2 className="text-2xl font-bold text-slate-500 uppercase mt-4">Error de Conexión</h2>
            <div className="mt-2 text-center">
                <p>Lo sentimos, parece que hubo un error al conectar con el servidor.</p>
                <p>Por favor, intenta nuevamente más tarde.</p>
            </div>
            <div className="mt-4">
                <button className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-md" onClick={() => window.location.href = '/'}>
                    Volver al Inicio
                </button>
            </div>
        </div>
    )
}
