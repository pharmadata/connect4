import {take} from "redux-saga/effects";

import game from "./game";
import {NEW_GAME} from "actions/game";

export default function* root(): any {
    do {
        yield *game();
    } while (yield take(NEW_GAME));
}
