import {Heroe} from "../../../Laviree/laviree/sanity/types/componentTypes";

export default async function callCase(heroe:Heroe) {
switch (heroe.choice) {
        case 'Black_BG':
            return (<>Black text Picture Background</>);
        case 'White_BG':
            return (<>White text Picture Background</>);
        case 'Left_Pic':
            return (<>Left Picture Right Text</>);
        case 'Right_Pic':
            return (<>Left text Picture Right</>);
        case 'Over_Pic':
            return (<>Picture Over Text</>);
        case 'Under_Pic':
            return (<>Picture Under Text</>);
        case 'Center_NoPic':
            return (<>Center text no pic</>);
        case 'Left_NoPic':
            return (<>Left text no pic</>);
        case 'Right_NoPic':
            return (<>Right text no pic</>);
        default:
            return (<></>);
    }
}