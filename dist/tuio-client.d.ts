import { default as default_2 } from 'osc-js';
import { Vector } from 'vecti';

declare type OscCallback = (oscMessage: any) => void;

declare interface OscMessage {
    address: string;
    args: (string | number)[];
}

export declare class ScapeXMobile {
    private _ws;
    private readonly _scapeEngineAddress;
    private readonly _scapeEnginePort;
    private _sxmConfig;
    private _eventHandlers;
    private _defaultMqttUrl;
    constructor(scapeEngineAddress: string);
    set onConfigChange(handler: SxmConfigEvent);
    connect(): void;
    private parseSxmConfig;
    disconnect(): void;
}

export declare interface SxmConfig {
    roomId: string;
    mqttUrl: string;
}

declare type SxmConfigEvent = (config: SxmConfig) => void;

export declare interface SxmMessage {
    type: string;
    topic: string;
    value: string;
}

export declare class Tuio11Blob extends Tuio11Container {
    private _blobId;
    private _angle;
    private _size;
    private _area;
    private _rotationSpeed;
    private _rotationAccel;
    constructor(startTime: TuioTime, sessionId: number, blobId: number, position: Vector, angle: number, size: Vector, area: number, velocity: Vector, rotationSpeed: number, motionAccel: number, rotationAccel: number);
    get blobId(): number;
    get angle(): number;
    get size(): Vector;
    get area(): number;
    get rotationSpeed(): number;
    get rotationAccel(): number;
    hasChanged(position: Vector, angle: number, size: Vector, area: number, velocity: Vector, rotationSpeed: number, motionAccel: number, rotationAccel: number): boolean;
    update(currentTime: TuioTime, position: Vector, angle: number, size: Vector, area: number, velocity: Vector, rotationSpeed: number, motionAccel: number, rotationAccel: number): void;
}

export declare class Tuio11Client {
    private _tuioReceiver;
    private _currentTime;
    private _currentFrame;
    private _tuioObjects;
    private _tuioCursors;
    private _tuioBlobs;
    private _objectSetMessages;
    private _cursorSetMessages;
    private _blobSetMessages;
    private _objectAliveMessage;
    private _cursorAliveMessage;
    private _blobAliveMessage;
    private _freeCursorIds;
    private _freeBlobIds;
    private _tuioListeners;
    constructor(tuioReceiver: TuioReceiver);
    connect(): void;
    disconnect(): void;
    addTuioListener(tuioListener: Tuio11Listener): void;
    removeTuioListener(tuioListener: Tuio11Listener): void;
    removeAllTuioListeners(): void;
    getTuioObjects(): MapIterator<Tuio11Object>;
    getTuioCursors(): MapIterator<Tuio11Cursor>;
    getTuioBlobs(): MapIterator<Tuio11Blob>;
    getTuioObject(sessionId: number): Tuio11Object | null;
    getTuioCursor(sessionId: number): Tuio11Cursor | null;
    getTuioBlob(sessionId: number): Tuio11Blob | null;
    private updateFrame;
    on2Dobj(oscMessage: default_2.Message): void;
    on2Dcur(oscMessage: default_2.Message): void;
    on2Dblb(oscMessage: default_2.Message): void;
}

declare class Tuio11Container extends Tuio11Point {
    MAX_PATH_LENGTH: number;
    private _currentTime;
    private _sessionId;
    private _velocity;
    private _motionSpeed;
    private _motionAccel;
    private _state;
    private _prevPoints;
    constructor(startTime: TuioTime, sessionId: number, position: Vector, velocity: Vector, motionAccel: number);
    get currentTime(): TuioTime;
    get sessionId(): number;
    get velocity(): Vector;
    get motionSpeed(): number;
    get motionAccel(): number;
    get state(): TuioState;
    protected set state(state: TuioState);
    get path(): Tuio11Point[];
    protected updateContainer(currentTime: TuioTime, position: Vector, velocity: Vector, motionAccel: number, isCalculateSpeeds: boolean): void;
    remove(currentTime: TuioTime): void;
}

export declare class Tuio11Cursor extends Tuio11Container {
    private _cursorId;
    constructor(startTime: TuioTime, sessionId: number, cursorId: number, position: Vector, velocity: Vector, motionAccel: number);
    get cursorId(): number;
    hasChanged(position: Vector, velocity: Vector, motionAccel: number): boolean;
    update(currentTime: TuioTime, position: Vector, velocity: Vector, motionAccel: number): void;
}

export declare interface Tuio11Listener {
    addTuioObject(tuioObject: Tuio11Object): void;
    updateTuioObject(tuioObject: Tuio11Object): void;
    removeTuioObject(tuioObject: Tuio11Object): void;
    addTuioCursor(tuioCursor: Tuio11Cursor): void;
    updateTuioCursor(tuioCursor: Tuio11Cursor): void;
    removeTuioCursor(tuioCursor: Tuio11Cursor): void;
    addTuioBlob(tuioBlob: Tuio11Blob): void;
    updateTuioBlob(tuioBlob: Tuio11Blob): void;
    removeTuioBlob(tuioBlob: Tuio11Blob): void;
    refresh(frameTime: TuioTime): void;
}

export declare class Tuio11Object extends Tuio11Container {
    private _symbolId;
    private _angle;
    private _rotationSpeed;
    private _rotationAccel;
    constructor(startTime: TuioTime, sessionId: number, symbolId: number, position: Vector, angle: number, velocity: Vector, rotationSpeed: number, motionAccel: number, rotationAccel: number);
    get symbolId(): number;
    get angle(): number;
    get rotationSpeed(): number;
    get rotationAccel(): number;
    hasChanged(position: Vector, angle: number, velocity: Vector, rotationSpeed: number, motionAccel: number, rotationAccel: number): boolean;
    update(currentTime: TuioTime, position: Vector, angle: number, velocity: Vector, rotationSpeed: number, motionAccel: number, rotationAccel: number): void;
}

declare class Tuio11Point {
    private _startTime;
    private _position;
    constructor(startTime: TuioTime, position: Vector);
    get startTime(): TuioTime;
    get position(): Vector;
    protected set position(position: Vector);
}

export declare class Tuio20Bounds extends Tuio20Component {
    _size: Vector;
    _area: number;
    constructor(startTime: TuioTime, container: Tuio20Object, position: Vector, angle: number, size: Vector, area: number, velocity: Vector, aVel: number, mAcc: number, rAcc: number);
    get size(): Vector;
    get area(): number;
    _hasChanged(position: Vector, angle: number, size: Vector, area: number, velocity: Vector, aVel: number, mAcc: number, rAcc: number): boolean;
    _update(currentTime: TuioTime, position: Vector, angle: number, size: Vector, area: number, velocity: Vector, aVel: number, mAcc: number, rAcc: number): void;
}

export declare class Tuio20Client {
    _tuioReceiver: TuioReceiver;
    _tuioListeners: Tuio20Listener[];
    _tuioObjects: Map<number, Tuio20Object>;
    _frmMessage: OscMessage | null;
    _otherMessages: OscMessage[];
    _bundleFrameId: number;
    _nextFrameId: number;
    _prevFrameId: number;
    _prevFrameTime: TuioTime;
    _dim: number | null;
    _source: string | null;
    constructor(tuioReceiver: TuioReceiver);
    _initialize_fields(): void;
    connect(): void;
    disconnect(): void;
    get dim(): number | null;
    get source(): string | null;
    addTuioListener(tuioListener: Tuio20Listener): void;
    getTuioPointerList(): (Tuio20Pointer | null)[];
    getTuioTokenList(): (Tuio20Token | null)[];
    getTuioBoundsList(): (Tuio20Bounds | null)[];
    getTuioSymbolList(): (Tuio20Symbol | null)[];
    removeTuioListener(tuioListener: Tuio20Listener): void;
    removeAllTuioListeners(): void;
    _onFrm(oscMessage: OscMessage): void;
    _onOther(oscMessage: OscMessage): void;
    _onAlv(oscMessage: OscMessage): void;
}

declare class Tuio20Component extends Tuio20Point {
    MAX_PATH_LENGTH: number;
    _currentTime: TuioTime;
    _container: Tuio20Object;
    _angle: number;
    _velocity: Vector;
    _mVel: number;
    _aVel: number;
    _mAcc: number;
    _rAcc: number;
    _state: TuioState;
    _prevPoints: Tuio20Point[];
    constructor(startTime: TuioTime, container: Tuio20Object, position: Vector, angle: number, velocity: Vector, aVel: number, mAcc: number, rAcc: number);
    get currentTime(): TuioTime;
    get container(): Tuio20Object;
    get sessionId(): number;
    get angle(): number;
    get velocity(): Vector;
    get mVel(): number;
    get aVel(): number;
    get mAcc(): number;
    get rAcc(): number;
    get state(): TuioState;
    get path(): Tuio20Point[];
    _updateComponent(currentTime: TuioTime, position: Vector, angle: number, velocity: Vector, aVel: number, mAcc: number, rAcc: number): void;
    _remove(currentTime: TuioTime): void;
}

export declare interface Tuio20Listener {
    tuioAdd(tuioObject: Tuio20Object): void;
    tuioUpdate(tuioObject: Tuio20Object): void;
    tuioRemove(tuioObject: Tuio20Object): void;
    tuioRefresh(tuioTime: TuioTime): void;
}

export declare class Tuio20Object {
    _startTime: TuioTime;
    _currentTime: TuioTime;
    _sessionId: number;
    _token: Tuio20Token | null;
    _pointer: Tuio20Pointer | null;
    _bounds: Tuio20Bounds | null;
    _symbol: Tuio20Symbol | null;
    _state: TuioState;
    constructor(startTime: TuioTime, sessionId: number);
    _update(currentTime: TuioTime): void;
    get startTime(): TuioTime;
    get currentTime(): TuioTime;
    get sessionId(): number;
    get token(): Tuio20Token | null;
    get pointer(): Tuio20Pointer | null;
    get bounds(): Tuio20Bounds | null;
    get symbol(): Tuio20Symbol | null;
    get state(): TuioState;
    setTuioToken(token: Tuio20Token): void;
    setTuioPointer(pointer: Tuio20Pointer): void;
    setTuioBounds(bounds: Tuio20Bounds): void;
    setTuioSymbol(symbol: Tuio20Symbol): void;
    containsTuioToken(): boolean;
    containsTuioPointer(): boolean;
    containsTuioBounds(): boolean;
    containsTuioSymbol(): boolean;
    containsNewTuioToken(): boolean;
    containsNewTuioPointer(): boolean;
    containsNewTuioBounds(): boolean;
    containsNewTuioSymbol(): boolean;
    _remove(currentTime: TuioTime): void;
}

declare class Tuio20Point {
    private _startTime;
    private _position;
    constructor(startTime: TuioTime, position: Vector);
    get startTime(): TuioTime;
    get position(): Vector;
    protected set position(position: Vector);
}

export declare class Tuio20Pointer extends Tuio20Component {
    _tuId: number;
    _cId: number;
    _shear: number;
    _radius: number;
    _press: number;
    _pVel: number;
    _pAcc: number;
    constructor(startTime: TuioTime, container: Tuio20Object, tuId: number, cId: number, position: Vector, angle: number, shear: number, radius: number, press: number, velocity: Vector, pVel: number, mAcc: number, pAcc: number);
    get tuId(): number;
    get cId(): number;
    get shear(): number;
    get radius(): number;
    get press(): number;
    get pVel(): number;
    get pAcc(): number;
    _hasChanged(tuId: number, cId: number, position: Vector, angle: number, shear: number, radius: number, press: number, velocity: Vector, pVel: number, mAcc: number, pAcc: number): boolean;
    _update(currentTime: TuioTime, tuId: number, cId: number, position: Vector, angle: number, shear: number, radius: number, press: number, velocity: Vector, pVel: number, mAcc: any, pAcc: number): void;
}

export declare class Tuio20Symbol extends Tuio20Component {
    _tuId: number;
    _cId: number;
    _group: string;
    _data: string;
    constructor(startTime: TuioTime, container: Tuio20Object, tuId: number, cId: number, group: string, data: string);
    get tuId(): number;
    get cId(): number;
    get group(): string;
    get data(): string;
    _hasChanged(tuId: number, cId: number, group: string, data: string): boolean;
    _update(currentTime: TuioTime, tuId: number, cId: number, group: string, data: string): void;
}

export declare class Tuio20Token extends Tuio20Component {
    _tuId: number;
    _cId: number;
    constructor(startTime: TuioTime, container: Tuio20Object, tuId: number, cId: number, position: Vector, angle: number, velocity: Vector, aVel: number, mAcc: number, rAcc: number);
    get tuId(): number;
    get cId(): number;
    _hasChanged(tuId: number, cId: number, position: Vector, angle: number, velocity: Vector, aVel: number, mAcc: number, rAcc: number): boolean;
    _update(currentTime: TuioTime, tuId: number, cId: number, position: Vector, angle: number, velocity: Vector, aVel: number, mAcc: number, rAcc: number): void;
}

export declare abstract class TuioReceiver {
    private _isConnected;
    private _messageListeners;
    constructor();
    abstract connect(): void;
    abstract disconnect(): void;
    get isConnected(): boolean;
    protected set isConnected(isConnected: boolean);
    onOscMessage(oscMessage: any): void;
    addMessageListener(address: string, callback: OscCallback): void;
}

declare class TuioState {
    static Added: TuioState;
    static Accelerating: TuioState;
    static Decelerating: TuioState;
    static Stopped: TuioState;
    static Removed: TuioState;
    static Rotating: TuioState;
    static Idle: TuioState;
    private _name;
    constructor(name: string);
    toString(): string;
}

export declare class TuioTime {
    private static _startTime;
    private _seconds;
    private _microSeconds;
    constructor(seconds: number, microSeconds: number);
    static fromOscTime(oscTime: bigint): TuioTime;
    subtract(tuioTime: TuioTime): TuioTime;
    getTotalMilliseconds(): number;
    static init(): void;
    static getCurrentTime(): TuioTime;
    private static _getSystemTime;
}

export declare class WebsocketTuioReceiver extends TuioReceiver {
    private readonly _host;
    private readonly _port;
    private _osc;
    constructor(host: string, port: number);
    connect(): void;
    disconnect(): void;
}

export { }
