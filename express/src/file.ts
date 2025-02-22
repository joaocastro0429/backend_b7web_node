import {writeFile,readFile,unlink} from 'fs/promises'


const exec=async()=>{
    console.log("escrevendo um arquivo")
    // criando um arquivo txt
    await writeFile('./teste.txt','testando 1,2,3')
    // juntando e quebrando por linha 
    const list=['joao','elias','jeremias']
    list.push('fulano')
   const txtList= list.join('\n')
   await writeFile('./teste.txt',txtList)
    // lendo arquivos
   const fileContent= await readFile('./teste.txt',{encoding:'utf8'})
    // alterando 
   const list2= await fileContent.split('\n')
   console.log(list2)
   const listText=list2.join('\n')
   await writeFile('./teste.txt',listText)
//    excluindo arquivo 
   await unlink('./teste.txt')

}


exec()