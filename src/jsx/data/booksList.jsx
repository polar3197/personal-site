import AILD from '../../../assets/imgs/AILD_Cover.png';
import TMM from '../../../assets/imgs/TMM_Cover.png';
import CFS from '../../../assets/imgs/CFS_Cover.png';
import TLVV from '../../../assets/imgs/TLVV_Cover.png';


export const Books = [
    {
        id: 0,
        title: "The Letters of Vincent van Gogh",
        author: "Vincent van Gogh",
        cover: TLVV,
        summary: "Collected letters of a fastidiously observed life of an artist struggling to justify his artistic compulsion."},
    {
        id: 1,
        title: "As I Lay Dying",
        author: "William Faulkner",
        cover: AILD ,
        summary: "Stream of consciousness, magical, southern, gothic tragedy."
    },
    {
        id: 2,
        title: "Magic Mountain",
        author: "Thomas Mann",
        cover: TMM,
        summary: "Humorous narrative about time, death, coming of age, the history of western philosophy, and its culmination in World War I."
    },
    {
        id: 3,
        title: "Cutting for Stone",
        author: "Abraham Verghese",
        cover: CFS,
        summary: "Amazingly detailed account of twins, born orphans in Ethiopia, the country's civil war, and thorough medical operations."
    }
];

export default Books;