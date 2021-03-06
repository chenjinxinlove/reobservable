/**
 * fromService creator
 * @author yoyoyohamapi
 * @ignore created 2018-08-13 14:26:55
 */
import { Observable } from 'rxjs';
import { Store } from 'redux';
import { Notification, NotificationLevel } from '../types/notification';
interface ServiceTemplates<T, E> {
    success: (resp: T) => string;
    error: (error: E) => string;
}
export interface ServiceConfig<T, E> {
    templates?: ServiceTemplates<T, E>;
    isSuccess?: (resp: T) => boolean;
    errorSelector?: (error: any) => any;
}
interface ServiceOptions<T, E> {
    /** 等级 */
    level: NotificationLevel;
    /** 消息模板 */
    templates?: ServiceTemplates<T, E>;
}
interface Result<T, E> {
    resp?: T | undefined;
    error?: E | undefined;
    success?: boolean | undefined;
}
export declare type ServiceFunc<T, E> = (serviceName: string, service: Promise<T>, options?: ServiceOptions<T, E>) => [Observable<Result<T, E>>, Observable<Result<T, E>>];
export declare function partition<T>(source: Observable<T>, predicate: (value: T, index: number) => boolean): Observable<T>[];
/**
 * 创建 fromService creator
 * @param {Notification} notification
 */
export default function createFromService<T, E>(notification: Notification, serviceConfig: ServiceConfig<T, E>, store: Store): ServiceFunc<T, E>;
export {};
