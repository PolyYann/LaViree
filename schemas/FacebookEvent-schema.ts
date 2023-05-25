import FacebookCalendar from "@/app/component/FacebookCalendar";

const FacebookEventSchema = {
    title: 'Facebook Event Section',
    name: 'facebookEventSection',
    type: 'document',
    inputcomponent: FacebookCalendar,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        }
    ]
}
export default FacebookEventSchema;