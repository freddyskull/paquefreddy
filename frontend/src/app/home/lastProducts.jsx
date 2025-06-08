import { DateBadge } from '@/components/dataTable/products/dateBadge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Link } from 'react-router-dom'


export const LastProducts = ({ products }) => {
    return (
        <Card className="bg-white dark:bg-secondary">
            <CardHeader>
                <CardTitle className="flex xl:flex-row flex-col xl:justify-between xl:items-center gap-2 font-bold text-md uppercase">
                    <h2>Subidos recientemente <span className="ml-1 text-foreground/50 text-xs">(últimos 5)</span></h2>
                    <Link to="/productos" className="text-foreground/50 hover:text-primary text-xs transition-colors duration-200">Ver todos</Link>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="group flex flex-col gap-4 w-full h-[140px]">
                    <style jsx global>
                        {`
                            .group:hover > div {
                                overflow-y: auto;
                            }
                        `}
                    </style>
                    <div className="flex flex-col gap-4 overflow-y-hidden">
                        {products.slice(5, 10).map((product) => (
                            <div key={product.id} className="flex items-center gap-6 w-full">
                                <img src={product.image} alt={product.name} className="bg-white rounded-full w-18 h-18 object-cover" />
                                <div className="w-full">
                                    <div className="flex justify-between items-center gap-2 w-full">
                                        <h2 className="font-bold text-base line-clamp-1">{product.name}</h2>
                                        <div className="text-end">
                                            <DateBadge date={product.createdAt} />
                                        </div>
                                    </div>
                                    <p className="mt-1 font-bold text-foreground/50 text-base">BS {product.price_bs.toFixed(2)} | USD {product.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}