import { DateBadge } from '@/components/dataTable/products/dateBadge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Link } from 'react-router-dom'


export const LastProducts = ({ products }) => {
    return (    
        <Card>
            <CardHeader>
                <CardTitle className="text-md font-bold uppercase flex items-center gap-2 justify-between">
                    <h2>Subidos recientemente <span className="ml-1 text-xs text-foreground/50">(últimos 5)</span></h2>
                    <Link to="/productos" className="text-xs text-foreground/50 transition-colors duration-200 hover:text-primary">Ver todos</Link>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-4 h-[140px] w-full group">
                    <style jsx global>
                        {`
                            .group:hover > div {
                                overflow-y: auto;
                            }
                        `}
                    </style>
                    <div className="overflow-y-hidden flex flex-col gap-4">
                    {products.slice(5, 10).map((product) => (
                        <div key={product.id} className="flex items-center gap-6 w-full">
                            <img src={product.image} alt={product.name} className="w-18 bg-white h-18 object-cover rounded-full"/>
                            <div className="w-full">
                                <div className="flex items-center gap-2 justify-between w-full">
                                    <h2 className="text-base font-bold line-clamp-1">{product.name}</h2>
                                    <div className="text-end">
                                        <DateBadge date={product.createdAt} />
                                    </div>
                                </div>
                                <p className="text-base font-bold text-foreground/50 mt-1">BS {product.price_bs.toFixed(2)} | USD {product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}