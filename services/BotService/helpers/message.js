module.exports = {
  parseWitAnswer (entities) {
    let answer = ''
    if (entities) {
      let types = entities.map(entity => entity.value)

      let uniqueTypes = _.uniq(types)

      answer += `I think you want to see *${uniqueTypes.toString()}*`
    } else {
      answer = 'I don\'t know what you want to see :(. Try once more time.'
    }

    return answer
  }
}
