function Hello(){
  let myName='kiran guttula';
  let number=456;
  let fullName=()=>{
    return 'kiran joy';
  }
  return <p>
    MessageNO:{number}. Iam your maseter{fullName()}
  </p>
}
export default Hello;