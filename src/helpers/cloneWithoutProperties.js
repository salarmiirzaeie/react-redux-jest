export default function cloneWithoutProperties(obj, removedProperties){
    const clonedObj = {...obj};

    removedProperties.forEach(property => {
        delete clonedObj[property]
    })

    return clonedObj
}
