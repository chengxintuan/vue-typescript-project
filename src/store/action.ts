// class Action {
//     getData(state, payload) {
//         if (payload.res.httpStatusCode == 200) {
//             state.itemDetail = payload.res.topiclist;
//         }
//     }
//
//     getUserInform(state, payload) {
//         state.user_id = payload.res.users_id;
//     }
//
//     addItemNum(state, payload) {
//         state.itemNum += payload.num;
//     }
//
//     rememberAnswer(state, payload) {
//         state.answerid[state.itemNum] = payload.id;
//     }
//
//     remberTime(state) {
//         state.timer = setInterval(() => {
//             state.allTime++;
//         }, 1000);
//     }
//
//     initializeData(state) {
//         state.itemNum = 1;
//         state.allTime = 0;
//     }
// }
//
// export default new Action();