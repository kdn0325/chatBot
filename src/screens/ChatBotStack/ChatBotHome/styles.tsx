import styled from "styled-components/native";

export const HeadArea = styled.View`
    align-items:center;
    width:100%;

    /* flex:1; */
`;
export const ContentArea = styled.View`
    width:100%;
    flex:1;
    padding-top:40px;
    
`;
export const FooterArea = styled.View`
    width:100%;
`;

export const SubmitContainer = styled.View`
    display:flex;
    /* margin-bottom:50px; */
    align-items:center;
    flex-direction:row;
`;


export const Submit = styled.TouchableOpacity`
    width:100%;
`;

export const InputContainer = styled.View `
    position:relative;
    margin-bottom:8px;
    width:100%;
    flex:1;
`;

export const TouchButton = styled.TouchableOpacity `
    position: absolute;
    top: 20px;
    right: 17px;
`;

// export const InputField = styled.TextInput`
//   flex: 1;
//   border: none;
//   padding: 10px;
//   word-break: break-all;
// `;