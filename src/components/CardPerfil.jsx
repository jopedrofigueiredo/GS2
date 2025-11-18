import {React, useState} from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"

export default function CardPerfil({id, nome, foto, cargo, skills}) {
    
    return (
      <div className="w-full flex justify-center px-3 box-border" id={id}>
        <Card className="w-full max-w-sm" >
          <CardHeader className="flex-col justify-center">
            <img className="rounded-full w-25 h-25" src="https://img.freepik.com/fotos-gratis/fundo-texturizado-abstrato_1258-30461.jpg" alt="Foto Usuário" width="100px" height="100" />
            <CardTitle className="text-center font-bold mb-4">{nome}</CardTitle>
          </CardHeader>
          <CardContent className="flex-col">
            <h3 className="text-center font-medium mb-3">{cargo}</h3>
            <div>
                <label className="font-medium text-lg ">Skills</label>
                <p className="">
                  {skills}
                </p>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
          </CardFooter>
        </Card>
      </div>
    )
}
 