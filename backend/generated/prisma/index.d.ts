
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model course
 * 
 */
export type course = $Result.DefaultSelection<Prisma.$coursePayload>
/**
 * Model course_booking
 * 
 */
export type course_booking = $Result.DefaultSelection<Prisma.$course_bookingPayload>
/**
 * Model student_registration
 * 
 */
export type student_registration = $Result.DefaultSelection<Prisma.$student_registrationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const role: {
  STUDENT: 'STUDENT',
  ADMIN: 'ADMIN',
  MENTOR: 'MENTOR'
};

export type role = (typeof role)[keyof typeof role]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const PaymentMode: {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
  EMI: 'EMI'
};

export type PaymentMode = (typeof PaymentMode)[keyof typeof PaymentMode]

}

export type role = $Enums.role

export const role: typeof $Enums.role

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type PaymentMode = $Enums.PaymentMode

export const PaymentMode: typeof $Enums.PaymentMode

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.courseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course_booking`: Exposes CRUD operations for the **course_booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Course_bookings
    * const course_bookings = await prisma.course_booking.findMany()
    * ```
    */
  get course_booking(): Prisma.course_bookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student_registration`: Exposes CRUD operations for the **student_registration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Student_registrations
    * const student_registrations = await prisma.student_registration.findMany()
    * ```
    */
  get student_registration(): Prisma.student_registrationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    course: 'course',
    course_booking: 'course_booking',
    student_registration: 'student_registration'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "course" | "course_booking" | "student_registration"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      course: {
        payload: Prisma.$coursePayload<ExtArgs>
        fields: Prisma.courseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.courseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.courseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findFirst: {
            args: Prisma.courseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.courseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findMany: {
            args: Prisma.courseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          create: {
            args: Prisma.courseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          createMany: {
            args: Prisma.courseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.courseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          delete: {
            args: Prisma.courseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          update: {
            args: Prisma.courseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          deleteMany: {
            args: Prisma.courseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.courseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.courseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          upsert: {
            args: Prisma.courseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.courseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.courseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      course_booking: {
        payload: Prisma.$course_bookingPayload<ExtArgs>
        fields: Prisma.course_bookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.course_bookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_bookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.course_bookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_bookingPayload>
          }
          findFirst: {
            args: Prisma.course_bookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_bookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.course_bookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_bookingPayload>
          }
          findMany: {
            args: Prisma.course_bookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_bookingPayload>[]
          }
          create: {
            args: Prisma.course_bookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_bookingPayload>
          }
          createMany: {
            args: Prisma.course_bookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.course_bookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_bookingPayload>[]
          }
          delete: {
            args: Prisma.course_bookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_bookingPayload>
          }
          update: {
            args: Prisma.course_bookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_bookingPayload>
          }
          deleteMany: {
            args: Prisma.course_bookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.course_bookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.course_bookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_bookingPayload>[]
          }
          upsert: {
            args: Prisma.course_bookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_bookingPayload>
          }
          aggregate: {
            args: Prisma.Course_bookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse_booking>
          }
          groupBy: {
            args: Prisma.course_bookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<Course_bookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.course_bookingCountArgs<ExtArgs>
            result: $Utils.Optional<Course_bookingCountAggregateOutputType> | number
          }
        }
      }
      student_registration: {
        payload: Prisma.$student_registrationPayload<ExtArgs>
        fields: Prisma.student_registrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.student_registrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_registrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.student_registrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_registrationPayload>
          }
          findFirst: {
            args: Prisma.student_registrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_registrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.student_registrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_registrationPayload>
          }
          findMany: {
            args: Prisma.student_registrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_registrationPayload>[]
          }
          create: {
            args: Prisma.student_registrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_registrationPayload>
          }
          createMany: {
            args: Prisma.student_registrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.student_registrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_registrationPayload>[]
          }
          delete: {
            args: Prisma.student_registrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_registrationPayload>
          }
          update: {
            args: Prisma.student_registrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_registrationPayload>
          }
          deleteMany: {
            args: Prisma.student_registrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.student_registrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.student_registrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_registrationPayload>[]
          }
          upsert: {
            args: Prisma.student_registrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_registrationPayload>
          }
          aggregate: {
            args: Prisma.Student_registrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent_registration>
          }
          groupBy: {
            args: Prisma.student_registrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Student_registrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.student_registrationCountArgs<ExtArgs>
            result: $Utils.Optional<Student_registrationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    course?: courseOmit
    course_booking?: course_bookingOmit
    student_registration?: student_registrationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_bookingWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    bookings: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | CourseCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_bookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    gender: string | null
    mobile: string | null
    password: string | null
    role: $Enums.role | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    gender: string | null
    mobile: string | null
    password: string | null
    role: $Enums.role | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    gender: number
    mobile: number
    password: number
    role: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gender?: true
    mobile?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gender?: true
    mobile?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gender?: true
    mobile?: true
    password?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    gender: string
    mobile: string
    password: string
    role: $Enums.role
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    mobile?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    bookings?: boolean | user$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    mobile?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    mobile?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    mobile?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "gender" | "mobile" | "password" | "role" | "created_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | user$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      bookings: Prisma.$course_bookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      gender: string
      mobile: string
      password: string
      role: $Enums.role
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends user$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, user$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly gender: FieldRef<"user", 'String'>
    readonly mobile: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'role'>
    readonly created_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.bookings
   */
  export type user$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_booking
     */
    select?: course_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_booking
     */
    omit?: course_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_bookingInclude<ExtArgs> | null
    where?: course_bookingWhereInput
    orderBy?: course_bookingOrderByWithRelationInput | course_bookingOrderByWithRelationInput[]
    cursor?: course_bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Course_bookingScalarFieldEnum | Course_bookingScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    description: string | null
    price: number | null
    duration: string | null
    isPopular: boolean | null
    emiAvailable: boolean | null
    image: string | null
    image_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    description: string | null
    price: number | null
    duration: string | null
    isPopular: boolean | null
    emiAvailable: boolean | null
    image: string | null
    image_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    description: number
    price: number
    duration: number
    isPopular: number
    emiAvailable: number
    image: number
    image_url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    price?: true
    duration?: true
    isPopular?: true
    emiAvailable?: true
    image?: true
    image_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    price?: true
    duration?: true
    isPopular?: true
    emiAvailable?: true
    image?: true
    image_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    price?: true
    duration?: true
    isPopular?: true
    emiAvailable?: true
    image?: true
    image_url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course to aggregate.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type courseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput
    orderBy?: courseOrderByWithAggregationInput | courseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: courseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    title: string
    slug: string
    description: string
    price: number
    duration: string
    isPopular: boolean
    emiAvailable: boolean
    image: string
    image_url: string
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends courseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type courseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    duration?: boolean
    isPopular?: boolean
    emiAvailable?: boolean
    image?: boolean
    image_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | course$bookingsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type courseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    duration?: boolean
    isPopular?: boolean
    emiAvailable?: boolean
    image?: boolean
    image_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type courseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    duration?: boolean
    isPopular?: boolean
    emiAvailable?: boolean
    image?: boolean
    image_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type courseSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    duration?: boolean
    isPopular?: boolean
    emiAvailable?: boolean
    image?: boolean
    image_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type courseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "description" | "price" | "duration" | "isPopular" | "emiAvailable" | "image" | "image_url" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type courseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | course$bookingsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type courseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type courseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $coursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course"
    objects: {
      bookings: Prisma.$course_bookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      description: string
      price: number
      duration: string
      isPopular: boolean
      emiAvailable: boolean
      image: string
      image_url: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type courseGetPayload<S extends boolean | null | undefined | courseDefaultArgs> = $Result.GetResult<Prisma.$coursePayload, S>

  type courseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<courseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface courseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course'], meta: { name: 'course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {courseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends courseFindUniqueArgs>(args: SelectSubset<T, courseFindUniqueArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {courseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends courseFindUniqueOrThrowArgs>(args: SelectSubset<T, courseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends courseFindFirstArgs>(args?: SelectSubset<T, courseFindFirstArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends courseFindFirstOrThrowArgs>(args?: SelectSubset<T, courseFindFirstOrThrowArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends courseFindManyArgs>(args?: SelectSubset<T, courseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {courseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends courseCreateArgs>(args: SelectSubset<T, courseCreateArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {courseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends courseCreateManyArgs>(args?: SelectSubset<T, courseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {courseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends courseCreateManyAndReturnArgs>(args?: SelectSubset<T, courseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {courseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends courseDeleteArgs>(args: SelectSubset<T, courseDeleteArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {courseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends courseUpdateArgs>(args: SelectSubset<T, courseUpdateArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {courseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends courseDeleteManyArgs>(args?: SelectSubset<T, courseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends courseUpdateManyArgs>(args: SelectSubset<T, courseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {courseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends courseUpdateManyAndReturnArgs>(args: SelectSubset<T, courseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {courseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends courseUpsertArgs>(args: SelectSubset<T, courseUpsertArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends courseCountArgs>(
      args?: Subset<T, courseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends courseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: courseGroupByArgs['orderBy'] }
        : { orderBy?: courseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, courseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course model
   */
  readonly fields: courseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__courseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends course$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, course$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the course model
   */
  interface courseFieldRefs {
    readonly id: FieldRef<"course", 'Int'>
    readonly title: FieldRef<"course", 'String'>
    readonly slug: FieldRef<"course", 'String'>
    readonly description: FieldRef<"course", 'String'>
    readonly price: FieldRef<"course", 'Int'>
    readonly duration: FieldRef<"course", 'String'>
    readonly isPopular: FieldRef<"course", 'Boolean'>
    readonly emiAvailable: FieldRef<"course", 'Boolean'>
    readonly image: FieldRef<"course", 'String'>
    readonly image_url: FieldRef<"course", 'String'>
    readonly createdAt: FieldRef<"course", 'DateTime'>
    readonly updatedAt: FieldRef<"course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * course findUnique
   */
  export type courseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course findUniqueOrThrow
   */
  export type courseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course findFirst
   */
  export type courseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course findFirstOrThrow
   */
  export type courseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course findMany
   */
  export type courseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course create
   */
  export type courseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to create a course.
     */
    data: XOR<courseCreateInput, courseUncheckedCreateInput>
  }

  /**
   * course createMany
   */
  export type courseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course createManyAndReturn
   */
  export type courseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course update
   */
  export type courseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to update a course.
     */
    data: XOR<courseUpdateInput, courseUncheckedUpdateInput>
    /**
     * Choose, which course to update.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course updateMany
   */
  export type courseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
  }

  /**
   * course updateManyAndReturn
   */
  export type courseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
  }

  /**
   * course upsert
   */
  export type courseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The filter to search for the course to update in case it exists.
     */
    where: courseWhereUniqueInput
    /**
     * In case the course found by the `where` argument doesn't exist, create a new course with this data.
     */
    create: XOR<courseCreateInput, courseUncheckedCreateInput>
    /**
     * In case the course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<courseUpdateInput, courseUncheckedUpdateInput>
  }

  /**
   * course delete
   */
  export type courseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter which course to delete.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course deleteMany
   */
  export type courseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to delete.
     */
    limit?: number
  }

  /**
   * course.bookings
   */
  export type course$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_booking
     */
    select?: course_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_booking
     */
    omit?: course_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_bookingInclude<ExtArgs> | null
    where?: course_bookingWhereInput
    orderBy?: course_bookingOrderByWithRelationInput | course_bookingOrderByWithRelationInput[]
    cursor?: course_bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Course_bookingScalarFieldEnum | Course_bookingScalarFieldEnum[]
  }

  /**
   * course without action
   */
  export type courseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
  }


  /**
   * Model course_booking
   */

  export type AggregateCourse_booking = {
    _count: Course_bookingCountAggregateOutputType | null
    _avg: Course_bookingAvgAggregateOutputType | null
    _sum: Course_bookingSumAggregateOutputType | null
    _min: Course_bookingMinAggregateOutputType | null
    _max: Course_bookingMaxAggregateOutputType | null
  }

  export type Course_bookingAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: number | null
    amountPaid: number | null
  }

  export type Course_bookingSumAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: number | null
    amountPaid: number | null
  }

  export type Course_bookingMinAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: number | null
    status: $Enums.BookingStatus | null
    paymentMode: $Enums.PaymentMode | null
    paymentId: string | null
    amountPaid: number | null
    bookedAt: Date | null
  }

  export type Course_bookingMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: number | null
    status: $Enums.BookingStatus | null
    paymentMode: $Enums.PaymentMode | null
    paymentId: string | null
    amountPaid: number | null
    bookedAt: Date | null
  }

  export type Course_bookingCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    status: number
    paymentMode: number
    paymentId: number
    amountPaid: number
    bookedAt: number
    _all: number
  }


  export type Course_bookingAvgAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    amountPaid?: true
  }

  export type Course_bookingSumAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    amountPaid?: true
  }

  export type Course_bookingMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    status?: true
    paymentMode?: true
    paymentId?: true
    amountPaid?: true
    bookedAt?: true
  }

  export type Course_bookingMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    status?: true
    paymentMode?: true
    paymentId?: true
    amountPaid?: true
    bookedAt?: true
  }

  export type Course_bookingCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    status?: true
    paymentMode?: true
    paymentId?: true
    amountPaid?: true
    bookedAt?: true
    _all?: true
  }

  export type Course_bookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_booking to aggregate.
     */
    where?: course_bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_bookings to fetch.
     */
    orderBy?: course_bookingOrderByWithRelationInput | course_bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: course_bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned course_bookings
    **/
    _count?: true | Course_bookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Course_bookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Course_bookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Course_bookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Course_bookingMaxAggregateInputType
  }

  export type GetCourse_bookingAggregateType<T extends Course_bookingAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse_booking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse_booking[P]>
      : GetScalarType<T[P], AggregateCourse_booking[P]>
  }




  export type course_bookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_bookingWhereInput
    orderBy?: course_bookingOrderByWithAggregationInput | course_bookingOrderByWithAggregationInput[]
    by: Course_bookingScalarFieldEnum[] | Course_bookingScalarFieldEnum
    having?: course_bookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Course_bookingCountAggregateInputType | true
    _avg?: Course_bookingAvgAggregateInputType
    _sum?: Course_bookingSumAggregateInputType
    _min?: Course_bookingMinAggregateInputType
    _max?: Course_bookingMaxAggregateInputType
  }

  export type Course_bookingGroupByOutputType = {
    id: number
    userId: number
    courseId: number
    status: $Enums.BookingStatus
    paymentMode: $Enums.PaymentMode
    paymentId: string | null
    amountPaid: number
    bookedAt: Date
    _count: Course_bookingCountAggregateOutputType | null
    _avg: Course_bookingAvgAggregateOutputType | null
    _sum: Course_bookingSumAggregateOutputType | null
    _min: Course_bookingMinAggregateOutputType | null
    _max: Course_bookingMaxAggregateOutputType | null
  }

  type GetCourse_bookingGroupByPayload<T extends course_bookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Course_bookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Course_bookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Course_bookingGroupByOutputType[P]>
            : GetScalarType<T[P], Course_bookingGroupByOutputType[P]>
        }
      >
    >


  export type course_bookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    status?: boolean
    paymentMode?: boolean
    paymentId?: boolean
    amountPaid?: boolean
    bookedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_booking"]>

  export type course_bookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    status?: boolean
    paymentMode?: boolean
    paymentId?: boolean
    amountPaid?: boolean
    bookedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_booking"]>

  export type course_bookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    status?: boolean
    paymentMode?: boolean
    paymentId?: boolean
    amountPaid?: boolean
    bookedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_booking"]>

  export type course_bookingSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    status?: boolean
    paymentMode?: boolean
    paymentId?: boolean
    amountPaid?: boolean
    bookedAt?: boolean
  }

  export type course_bookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "status" | "paymentMode" | "paymentId" | "amountPaid" | "bookedAt", ExtArgs["result"]["course_booking"]>
  export type course_bookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type course_bookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type course_bookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }

  export type $course_bookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course_booking"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      course: Prisma.$coursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      courseId: number
      status: $Enums.BookingStatus
      paymentMode: $Enums.PaymentMode
      paymentId: string | null
      amountPaid: number
      bookedAt: Date
    }, ExtArgs["result"]["course_booking"]>
    composites: {}
  }

  type course_bookingGetPayload<S extends boolean | null | undefined | course_bookingDefaultArgs> = $Result.GetResult<Prisma.$course_bookingPayload, S>

  type course_bookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<course_bookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Course_bookingCountAggregateInputType | true
    }

  export interface course_bookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course_booking'], meta: { name: 'course_booking' } }
    /**
     * Find zero or one Course_booking that matches the filter.
     * @param {course_bookingFindUniqueArgs} args - Arguments to find a Course_booking
     * @example
     * // Get one Course_booking
     * const course_booking = await prisma.course_booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends course_bookingFindUniqueArgs>(args: SelectSubset<T, course_bookingFindUniqueArgs<ExtArgs>>): Prisma__course_bookingClient<$Result.GetResult<Prisma.$course_bookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course_booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {course_bookingFindUniqueOrThrowArgs} args - Arguments to find a Course_booking
     * @example
     * // Get one Course_booking
     * const course_booking = await prisma.course_booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends course_bookingFindUniqueOrThrowArgs>(args: SelectSubset<T, course_bookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__course_bookingClient<$Result.GetResult<Prisma.$course_bookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_bookingFindFirstArgs} args - Arguments to find a Course_booking
     * @example
     * // Get one Course_booking
     * const course_booking = await prisma.course_booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends course_bookingFindFirstArgs>(args?: SelectSubset<T, course_bookingFindFirstArgs<ExtArgs>>): Prisma__course_bookingClient<$Result.GetResult<Prisma.$course_bookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_bookingFindFirstOrThrowArgs} args - Arguments to find a Course_booking
     * @example
     * // Get one Course_booking
     * const course_booking = await prisma.course_booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends course_bookingFindFirstOrThrowArgs>(args?: SelectSubset<T, course_bookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__course_bookingClient<$Result.GetResult<Prisma.$course_bookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Course_bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_bookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Course_bookings
     * const course_bookings = await prisma.course_booking.findMany()
     * 
     * // Get first 10 Course_bookings
     * const course_bookings = await prisma.course_booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const course_bookingWithIdOnly = await prisma.course_booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends course_bookingFindManyArgs>(args?: SelectSubset<T, course_bookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course_booking.
     * @param {course_bookingCreateArgs} args - Arguments to create a Course_booking.
     * @example
     * // Create one Course_booking
     * const Course_booking = await prisma.course_booking.create({
     *   data: {
     *     // ... data to create a Course_booking
     *   }
     * })
     * 
     */
    create<T extends course_bookingCreateArgs>(args: SelectSubset<T, course_bookingCreateArgs<ExtArgs>>): Prisma__course_bookingClient<$Result.GetResult<Prisma.$course_bookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Course_bookings.
     * @param {course_bookingCreateManyArgs} args - Arguments to create many Course_bookings.
     * @example
     * // Create many Course_bookings
     * const course_booking = await prisma.course_booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends course_bookingCreateManyArgs>(args?: SelectSubset<T, course_bookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Course_bookings and returns the data saved in the database.
     * @param {course_bookingCreateManyAndReturnArgs} args - Arguments to create many Course_bookings.
     * @example
     * // Create many Course_bookings
     * const course_booking = await prisma.course_booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Course_bookings and only return the `id`
     * const course_bookingWithIdOnly = await prisma.course_booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends course_bookingCreateManyAndReturnArgs>(args?: SelectSubset<T, course_bookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_bookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course_booking.
     * @param {course_bookingDeleteArgs} args - Arguments to delete one Course_booking.
     * @example
     * // Delete one Course_booking
     * const Course_booking = await prisma.course_booking.delete({
     *   where: {
     *     // ... filter to delete one Course_booking
     *   }
     * })
     * 
     */
    delete<T extends course_bookingDeleteArgs>(args: SelectSubset<T, course_bookingDeleteArgs<ExtArgs>>): Prisma__course_bookingClient<$Result.GetResult<Prisma.$course_bookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course_booking.
     * @param {course_bookingUpdateArgs} args - Arguments to update one Course_booking.
     * @example
     * // Update one Course_booking
     * const course_booking = await prisma.course_booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends course_bookingUpdateArgs>(args: SelectSubset<T, course_bookingUpdateArgs<ExtArgs>>): Prisma__course_bookingClient<$Result.GetResult<Prisma.$course_bookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Course_bookings.
     * @param {course_bookingDeleteManyArgs} args - Arguments to filter Course_bookings to delete.
     * @example
     * // Delete a few Course_bookings
     * const { count } = await prisma.course_booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends course_bookingDeleteManyArgs>(args?: SelectSubset<T, course_bookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_bookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Course_bookings
     * const course_booking = await prisma.course_booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends course_bookingUpdateManyArgs>(args: SelectSubset<T, course_bookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_bookings and returns the data updated in the database.
     * @param {course_bookingUpdateManyAndReturnArgs} args - Arguments to update many Course_bookings.
     * @example
     * // Update many Course_bookings
     * const course_booking = await prisma.course_booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Course_bookings and only return the `id`
     * const course_bookingWithIdOnly = await prisma.course_booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends course_bookingUpdateManyAndReturnArgs>(args: SelectSubset<T, course_bookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_bookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course_booking.
     * @param {course_bookingUpsertArgs} args - Arguments to update or create a Course_booking.
     * @example
     * // Update or create a Course_booking
     * const course_booking = await prisma.course_booking.upsert({
     *   create: {
     *     // ... data to create a Course_booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course_booking we want to update
     *   }
     * })
     */
    upsert<T extends course_bookingUpsertArgs>(args: SelectSubset<T, course_bookingUpsertArgs<ExtArgs>>): Prisma__course_bookingClient<$Result.GetResult<Prisma.$course_bookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Course_bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_bookingCountArgs} args - Arguments to filter Course_bookings to count.
     * @example
     * // Count the number of Course_bookings
     * const count = await prisma.course_booking.count({
     *   where: {
     *     // ... the filter for the Course_bookings we want to count
     *   }
     * })
    **/
    count<T extends course_bookingCountArgs>(
      args?: Subset<T, course_bookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Course_bookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course_booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Course_bookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Course_bookingAggregateArgs>(args: Subset<T, Course_bookingAggregateArgs>): Prisma.PrismaPromise<GetCourse_bookingAggregateType<T>>

    /**
     * Group by Course_booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_bookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends course_bookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: course_bookingGroupByArgs['orderBy'] }
        : { orderBy?: course_bookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, course_bookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourse_bookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course_booking model
   */
  readonly fields: course_bookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course_booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__course_bookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the course_booking model
   */
  interface course_bookingFieldRefs {
    readonly id: FieldRef<"course_booking", 'Int'>
    readonly userId: FieldRef<"course_booking", 'Int'>
    readonly courseId: FieldRef<"course_booking", 'Int'>
    readonly status: FieldRef<"course_booking", 'BookingStatus'>
    readonly paymentMode: FieldRef<"course_booking", 'PaymentMode'>
    readonly paymentId: FieldRef<"course_booking", 'String'>
    readonly amountPaid: FieldRef<"course_booking", 'Int'>
    readonly bookedAt: FieldRef<"course_booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * course_booking findUnique
   */
  export type course_bookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_booking
     */
    select?: course_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_booking
     */
    omit?: course_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_bookingInclude<ExtArgs> | null
    /**
     * Filter, which course_booking to fetch.
     */
    where: course_bookingWhereUniqueInput
  }

  /**
   * course_booking findUniqueOrThrow
   */
  export type course_bookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_booking
     */
    select?: course_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_booking
     */
    omit?: course_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_bookingInclude<ExtArgs> | null
    /**
     * Filter, which course_booking to fetch.
     */
    where: course_bookingWhereUniqueInput
  }

  /**
   * course_booking findFirst
   */
  export type course_bookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_booking
     */
    select?: course_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_booking
     */
    omit?: course_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_bookingInclude<ExtArgs> | null
    /**
     * Filter, which course_booking to fetch.
     */
    where?: course_bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_bookings to fetch.
     */
    orderBy?: course_bookingOrderByWithRelationInput | course_bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_bookings.
     */
    cursor?: course_bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_bookings.
     */
    distinct?: Course_bookingScalarFieldEnum | Course_bookingScalarFieldEnum[]
  }

  /**
   * course_booking findFirstOrThrow
   */
  export type course_bookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_booking
     */
    select?: course_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_booking
     */
    omit?: course_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_bookingInclude<ExtArgs> | null
    /**
     * Filter, which course_booking to fetch.
     */
    where?: course_bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_bookings to fetch.
     */
    orderBy?: course_bookingOrderByWithRelationInput | course_bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_bookings.
     */
    cursor?: course_bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_bookings.
     */
    distinct?: Course_bookingScalarFieldEnum | Course_bookingScalarFieldEnum[]
  }

  /**
   * course_booking findMany
   */
  export type course_bookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_booking
     */
    select?: course_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_booking
     */
    omit?: course_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_bookingInclude<ExtArgs> | null
    /**
     * Filter, which course_bookings to fetch.
     */
    where?: course_bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_bookings to fetch.
     */
    orderBy?: course_bookingOrderByWithRelationInput | course_bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing course_bookings.
     */
    cursor?: course_bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_bookings.
     */
    skip?: number
    distinct?: Course_bookingScalarFieldEnum | Course_bookingScalarFieldEnum[]
  }

  /**
   * course_booking create
   */
  export type course_bookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_booking
     */
    select?: course_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_booking
     */
    omit?: course_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_bookingInclude<ExtArgs> | null
    /**
     * The data needed to create a course_booking.
     */
    data: XOR<course_bookingCreateInput, course_bookingUncheckedCreateInput>
  }

  /**
   * course_booking createMany
   */
  export type course_bookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many course_bookings.
     */
    data: course_bookingCreateManyInput | course_bookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course_booking createManyAndReturn
   */
  export type course_bookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_booking
     */
    select?: course_bookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_booking
     */
    omit?: course_bookingOmit<ExtArgs> | null
    /**
     * The data used to create many course_bookings.
     */
    data: course_bookingCreateManyInput | course_bookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_bookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * course_booking update
   */
  export type course_bookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_booking
     */
    select?: course_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_booking
     */
    omit?: course_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_bookingInclude<ExtArgs> | null
    /**
     * The data needed to update a course_booking.
     */
    data: XOR<course_bookingUpdateInput, course_bookingUncheckedUpdateInput>
    /**
     * Choose, which course_booking to update.
     */
    where: course_bookingWhereUniqueInput
  }

  /**
   * course_booking updateMany
   */
  export type course_bookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update course_bookings.
     */
    data: XOR<course_bookingUpdateManyMutationInput, course_bookingUncheckedUpdateManyInput>
    /**
     * Filter which course_bookings to update
     */
    where?: course_bookingWhereInput
    /**
     * Limit how many course_bookings to update.
     */
    limit?: number
  }

  /**
   * course_booking updateManyAndReturn
   */
  export type course_bookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_booking
     */
    select?: course_bookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_booking
     */
    omit?: course_bookingOmit<ExtArgs> | null
    /**
     * The data used to update course_bookings.
     */
    data: XOR<course_bookingUpdateManyMutationInput, course_bookingUncheckedUpdateManyInput>
    /**
     * Filter which course_bookings to update
     */
    where?: course_bookingWhereInput
    /**
     * Limit how many course_bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_bookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * course_booking upsert
   */
  export type course_bookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_booking
     */
    select?: course_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_booking
     */
    omit?: course_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_bookingInclude<ExtArgs> | null
    /**
     * The filter to search for the course_booking to update in case it exists.
     */
    where: course_bookingWhereUniqueInput
    /**
     * In case the course_booking found by the `where` argument doesn't exist, create a new course_booking with this data.
     */
    create: XOR<course_bookingCreateInput, course_bookingUncheckedCreateInput>
    /**
     * In case the course_booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<course_bookingUpdateInput, course_bookingUncheckedUpdateInput>
  }

  /**
   * course_booking delete
   */
  export type course_bookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_booking
     */
    select?: course_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_booking
     */
    omit?: course_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_bookingInclude<ExtArgs> | null
    /**
     * Filter which course_booking to delete.
     */
    where: course_bookingWhereUniqueInput
  }

  /**
   * course_booking deleteMany
   */
  export type course_bookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_bookings to delete
     */
    where?: course_bookingWhereInput
    /**
     * Limit how many course_bookings to delete.
     */
    limit?: number
  }

  /**
   * course_booking without action
   */
  export type course_bookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_booking
     */
    select?: course_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_booking
     */
    omit?: course_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_bookingInclude<ExtArgs> | null
  }


  /**
   * Model student_registration
   */

  export type AggregateStudent_registration = {
    _count: Student_registrationCountAggregateOutputType | null
    _avg: Student_registrationAvgAggregateOutputType | null
    _sum: Student_registrationSumAggregateOutputType | null
    _min: Student_registrationMinAggregateOutputType | null
    _max: Student_registrationMaxAggregateOutputType | null
  }

  export type Student_registrationAvgAggregateOutputType = {
    id: number | null
  }

  export type Student_registrationSumAggregateOutputType = {
    id: number | null
  }

  export type Student_registrationMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    program: string | null
    status: string | null
    gender: string | null
    background: string | null
    created_at: Date | null
  }

  export type Student_registrationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    program: string | null
    status: string | null
    gender: string | null
    background: string | null
    created_at: Date | null
  }

  export type Student_registrationCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    program: number
    status: number
    gender: number
    background: number
    created_at: number
    _all: number
  }


  export type Student_registrationAvgAggregateInputType = {
    id?: true
  }

  export type Student_registrationSumAggregateInputType = {
    id?: true
  }

  export type Student_registrationMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    program?: true
    status?: true
    gender?: true
    background?: true
    created_at?: true
  }

  export type Student_registrationMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    program?: true
    status?: true
    gender?: true
    background?: true
    created_at?: true
  }

  export type Student_registrationCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    program?: true
    status?: true
    gender?: true
    background?: true
    created_at?: true
    _all?: true
  }

  export type Student_registrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student_registration to aggregate.
     */
    where?: student_registrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_registrations to fetch.
     */
    orderBy?: student_registrationOrderByWithRelationInput | student_registrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: student_registrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned student_registrations
    **/
    _count?: true | Student_registrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Student_registrationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Student_registrationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Student_registrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Student_registrationMaxAggregateInputType
  }

  export type GetStudent_registrationAggregateType<T extends Student_registrationAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent_registration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent_registration[P]>
      : GetScalarType<T[P], AggregateStudent_registration[P]>
  }




  export type student_registrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: student_registrationWhereInput
    orderBy?: student_registrationOrderByWithAggregationInput | student_registrationOrderByWithAggregationInput[]
    by: Student_registrationScalarFieldEnum[] | Student_registrationScalarFieldEnum
    having?: student_registrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Student_registrationCountAggregateInputType | true
    _avg?: Student_registrationAvgAggregateInputType
    _sum?: Student_registrationSumAggregateInputType
    _min?: Student_registrationMinAggregateInputType
    _max?: Student_registrationMaxAggregateInputType
  }

  export type Student_registrationGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    program: string
    status: string
    gender: string
    background: string | null
    created_at: Date
    _count: Student_registrationCountAggregateOutputType | null
    _avg: Student_registrationAvgAggregateOutputType | null
    _sum: Student_registrationSumAggregateOutputType | null
    _min: Student_registrationMinAggregateOutputType | null
    _max: Student_registrationMaxAggregateOutputType | null
  }

  type GetStudent_registrationGroupByPayload<T extends student_registrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Student_registrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Student_registrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Student_registrationGroupByOutputType[P]>
            : GetScalarType<T[P], Student_registrationGroupByOutputType[P]>
        }
      >
    >


  export type student_registrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    program?: boolean
    status?: boolean
    gender?: boolean
    background?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["student_registration"]>

  export type student_registrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    program?: boolean
    status?: boolean
    gender?: boolean
    background?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["student_registration"]>

  export type student_registrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    program?: boolean
    status?: boolean
    gender?: boolean
    background?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["student_registration"]>

  export type student_registrationSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    program?: boolean
    status?: boolean
    gender?: boolean
    background?: boolean
    created_at?: boolean
  }

  export type student_registrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "program" | "status" | "gender" | "background" | "created_at", ExtArgs["result"]["student_registration"]>

  export type $student_registrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student_registration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      program: string
      status: string
      gender: string
      background: string | null
      created_at: Date
    }, ExtArgs["result"]["student_registration"]>
    composites: {}
  }

  type student_registrationGetPayload<S extends boolean | null | undefined | student_registrationDefaultArgs> = $Result.GetResult<Prisma.$student_registrationPayload, S>

  type student_registrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<student_registrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Student_registrationCountAggregateInputType | true
    }

  export interface student_registrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student_registration'], meta: { name: 'student_registration' } }
    /**
     * Find zero or one Student_registration that matches the filter.
     * @param {student_registrationFindUniqueArgs} args - Arguments to find a Student_registration
     * @example
     * // Get one Student_registration
     * const student_registration = await prisma.student_registration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends student_registrationFindUniqueArgs>(args: SelectSubset<T, student_registrationFindUniqueArgs<ExtArgs>>): Prisma__student_registrationClient<$Result.GetResult<Prisma.$student_registrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student_registration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {student_registrationFindUniqueOrThrowArgs} args - Arguments to find a Student_registration
     * @example
     * // Get one Student_registration
     * const student_registration = await prisma.student_registration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends student_registrationFindUniqueOrThrowArgs>(args: SelectSubset<T, student_registrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__student_registrationClient<$Result.GetResult<Prisma.$student_registrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_registration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_registrationFindFirstArgs} args - Arguments to find a Student_registration
     * @example
     * // Get one Student_registration
     * const student_registration = await prisma.student_registration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends student_registrationFindFirstArgs>(args?: SelectSubset<T, student_registrationFindFirstArgs<ExtArgs>>): Prisma__student_registrationClient<$Result.GetResult<Prisma.$student_registrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_registration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_registrationFindFirstOrThrowArgs} args - Arguments to find a Student_registration
     * @example
     * // Get one Student_registration
     * const student_registration = await prisma.student_registration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends student_registrationFindFirstOrThrowArgs>(args?: SelectSubset<T, student_registrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__student_registrationClient<$Result.GetResult<Prisma.$student_registrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Student_registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_registrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Student_registrations
     * const student_registrations = await prisma.student_registration.findMany()
     * 
     * // Get first 10 Student_registrations
     * const student_registrations = await prisma.student_registration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const student_registrationWithIdOnly = await prisma.student_registration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends student_registrationFindManyArgs>(args?: SelectSubset<T, student_registrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_registrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student_registration.
     * @param {student_registrationCreateArgs} args - Arguments to create a Student_registration.
     * @example
     * // Create one Student_registration
     * const Student_registration = await prisma.student_registration.create({
     *   data: {
     *     // ... data to create a Student_registration
     *   }
     * })
     * 
     */
    create<T extends student_registrationCreateArgs>(args: SelectSubset<T, student_registrationCreateArgs<ExtArgs>>): Prisma__student_registrationClient<$Result.GetResult<Prisma.$student_registrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Student_registrations.
     * @param {student_registrationCreateManyArgs} args - Arguments to create many Student_registrations.
     * @example
     * // Create many Student_registrations
     * const student_registration = await prisma.student_registration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends student_registrationCreateManyArgs>(args?: SelectSubset<T, student_registrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Student_registrations and returns the data saved in the database.
     * @param {student_registrationCreateManyAndReturnArgs} args - Arguments to create many Student_registrations.
     * @example
     * // Create many Student_registrations
     * const student_registration = await prisma.student_registration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Student_registrations and only return the `id`
     * const student_registrationWithIdOnly = await prisma.student_registration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends student_registrationCreateManyAndReturnArgs>(args?: SelectSubset<T, student_registrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_registrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student_registration.
     * @param {student_registrationDeleteArgs} args - Arguments to delete one Student_registration.
     * @example
     * // Delete one Student_registration
     * const Student_registration = await prisma.student_registration.delete({
     *   where: {
     *     // ... filter to delete one Student_registration
     *   }
     * })
     * 
     */
    delete<T extends student_registrationDeleteArgs>(args: SelectSubset<T, student_registrationDeleteArgs<ExtArgs>>): Prisma__student_registrationClient<$Result.GetResult<Prisma.$student_registrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student_registration.
     * @param {student_registrationUpdateArgs} args - Arguments to update one Student_registration.
     * @example
     * // Update one Student_registration
     * const student_registration = await prisma.student_registration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends student_registrationUpdateArgs>(args: SelectSubset<T, student_registrationUpdateArgs<ExtArgs>>): Prisma__student_registrationClient<$Result.GetResult<Prisma.$student_registrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Student_registrations.
     * @param {student_registrationDeleteManyArgs} args - Arguments to filter Student_registrations to delete.
     * @example
     * // Delete a few Student_registrations
     * const { count } = await prisma.student_registration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends student_registrationDeleteManyArgs>(args?: SelectSubset<T, student_registrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_registrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Student_registrations
     * const student_registration = await prisma.student_registration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends student_registrationUpdateManyArgs>(args: SelectSubset<T, student_registrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_registrations and returns the data updated in the database.
     * @param {student_registrationUpdateManyAndReturnArgs} args - Arguments to update many Student_registrations.
     * @example
     * // Update many Student_registrations
     * const student_registration = await prisma.student_registration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Student_registrations and only return the `id`
     * const student_registrationWithIdOnly = await prisma.student_registration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends student_registrationUpdateManyAndReturnArgs>(args: SelectSubset<T, student_registrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_registrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student_registration.
     * @param {student_registrationUpsertArgs} args - Arguments to update or create a Student_registration.
     * @example
     * // Update or create a Student_registration
     * const student_registration = await prisma.student_registration.upsert({
     *   create: {
     *     // ... data to create a Student_registration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student_registration we want to update
     *   }
     * })
     */
    upsert<T extends student_registrationUpsertArgs>(args: SelectSubset<T, student_registrationUpsertArgs<ExtArgs>>): Prisma__student_registrationClient<$Result.GetResult<Prisma.$student_registrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Student_registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_registrationCountArgs} args - Arguments to filter Student_registrations to count.
     * @example
     * // Count the number of Student_registrations
     * const count = await prisma.student_registration.count({
     *   where: {
     *     // ... the filter for the Student_registrations we want to count
     *   }
     * })
    **/
    count<T extends student_registrationCountArgs>(
      args?: Subset<T, student_registrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Student_registrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student_registration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_registrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Student_registrationAggregateArgs>(args: Subset<T, Student_registrationAggregateArgs>): Prisma.PrismaPromise<GetStudent_registrationAggregateType<T>>

    /**
     * Group by Student_registration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_registrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends student_registrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: student_registrationGroupByArgs['orderBy'] }
        : { orderBy?: student_registrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, student_registrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudent_registrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student_registration model
   */
  readonly fields: student_registrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student_registration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__student_registrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the student_registration model
   */
  interface student_registrationFieldRefs {
    readonly id: FieldRef<"student_registration", 'Int'>
    readonly name: FieldRef<"student_registration", 'String'>
    readonly email: FieldRef<"student_registration", 'String'>
    readonly phone: FieldRef<"student_registration", 'String'>
    readonly program: FieldRef<"student_registration", 'String'>
    readonly status: FieldRef<"student_registration", 'String'>
    readonly gender: FieldRef<"student_registration", 'String'>
    readonly background: FieldRef<"student_registration", 'String'>
    readonly created_at: FieldRef<"student_registration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * student_registration findUnique
   */
  export type student_registrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_registration
     */
    select?: student_registrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_registration
     */
    omit?: student_registrationOmit<ExtArgs> | null
    /**
     * Filter, which student_registration to fetch.
     */
    where: student_registrationWhereUniqueInput
  }

  /**
   * student_registration findUniqueOrThrow
   */
  export type student_registrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_registration
     */
    select?: student_registrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_registration
     */
    omit?: student_registrationOmit<ExtArgs> | null
    /**
     * Filter, which student_registration to fetch.
     */
    where: student_registrationWhereUniqueInput
  }

  /**
   * student_registration findFirst
   */
  export type student_registrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_registration
     */
    select?: student_registrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_registration
     */
    omit?: student_registrationOmit<ExtArgs> | null
    /**
     * Filter, which student_registration to fetch.
     */
    where?: student_registrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_registrations to fetch.
     */
    orderBy?: student_registrationOrderByWithRelationInput | student_registrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for student_registrations.
     */
    cursor?: student_registrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of student_registrations.
     */
    distinct?: Student_registrationScalarFieldEnum | Student_registrationScalarFieldEnum[]
  }

  /**
   * student_registration findFirstOrThrow
   */
  export type student_registrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_registration
     */
    select?: student_registrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_registration
     */
    omit?: student_registrationOmit<ExtArgs> | null
    /**
     * Filter, which student_registration to fetch.
     */
    where?: student_registrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_registrations to fetch.
     */
    orderBy?: student_registrationOrderByWithRelationInput | student_registrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for student_registrations.
     */
    cursor?: student_registrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of student_registrations.
     */
    distinct?: Student_registrationScalarFieldEnum | Student_registrationScalarFieldEnum[]
  }

  /**
   * student_registration findMany
   */
  export type student_registrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_registration
     */
    select?: student_registrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_registration
     */
    omit?: student_registrationOmit<ExtArgs> | null
    /**
     * Filter, which student_registrations to fetch.
     */
    where?: student_registrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_registrations to fetch.
     */
    orderBy?: student_registrationOrderByWithRelationInput | student_registrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing student_registrations.
     */
    cursor?: student_registrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_registrations.
     */
    skip?: number
    distinct?: Student_registrationScalarFieldEnum | Student_registrationScalarFieldEnum[]
  }

  /**
   * student_registration create
   */
  export type student_registrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_registration
     */
    select?: student_registrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_registration
     */
    omit?: student_registrationOmit<ExtArgs> | null
    /**
     * The data needed to create a student_registration.
     */
    data: XOR<student_registrationCreateInput, student_registrationUncheckedCreateInput>
  }

  /**
   * student_registration createMany
   */
  export type student_registrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many student_registrations.
     */
    data: student_registrationCreateManyInput | student_registrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student_registration createManyAndReturn
   */
  export type student_registrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_registration
     */
    select?: student_registrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student_registration
     */
    omit?: student_registrationOmit<ExtArgs> | null
    /**
     * The data used to create many student_registrations.
     */
    data: student_registrationCreateManyInput | student_registrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student_registration update
   */
  export type student_registrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_registration
     */
    select?: student_registrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_registration
     */
    omit?: student_registrationOmit<ExtArgs> | null
    /**
     * The data needed to update a student_registration.
     */
    data: XOR<student_registrationUpdateInput, student_registrationUncheckedUpdateInput>
    /**
     * Choose, which student_registration to update.
     */
    where: student_registrationWhereUniqueInput
  }

  /**
   * student_registration updateMany
   */
  export type student_registrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update student_registrations.
     */
    data: XOR<student_registrationUpdateManyMutationInput, student_registrationUncheckedUpdateManyInput>
    /**
     * Filter which student_registrations to update
     */
    where?: student_registrationWhereInput
    /**
     * Limit how many student_registrations to update.
     */
    limit?: number
  }

  /**
   * student_registration updateManyAndReturn
   */
  export type student_registrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_registration
     */
    select?: student_registrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student_registration
     */
    omit?: student_registrationOmit<ExtArgs> | null
    /**
     * The data used to update student_registrations.
     */
    data: XOR<student_registrationUpdateManyMutationInput, student_registrationUncheckedUpdateManyInput>
    /**
     * Filter which student_registrations to update
     */
    where?: student_registrationWhereInput
    /**
     * Limit how many student_registrations to update.
     */
    limit?: number
  }

  /**
   * student_registration upsert
   */
  export type student_registrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_registration
     */
    select?: student_registrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_registration
     */
    omit?: student_registrationOmit<ExtArgs> | null
    /**
     * The filter to search for the student_registration to update in case it exists.
     */
    where: student_registrationWhereUniqueInput
    /**
     * In case the student_registration found by the `where` argument doesn't exist, create a new student_registration with this data.
     */
    create: XOR<student_registrationCreateInput, student_registrationUncheckedCreateInput>
    /**
     * In case the student_registration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<student_registrationUpdateInput, student_registrationUncheckedUpdateInput>
  }

  /**
   * student_registration delete
   */
  export type student_registrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_registration
     */
    select?: student_registrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_registration
     */
    omit?: student_registrationOmit<ExtArgs> | null
    /**
     * Filter which student_registration to delete.
     */
    where: student_registrationWhereUniqueInput
  }

  /**
   * student_registration deleteMany
   */
  export type student_registrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student_registrations to delete
     */
    where?: student_registrationWhereInput
    /**
     * Limit how many student_registrations to delete.
     */
    limit?: number
  }

  /**
   * student_registration without action
   */
  export type student_registrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_registration
     */
    select?: student_registrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_registration
     */
    omit?: student_registrationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    gender: 'gender',
    mobile: 'mobile',
    password: 'password',
    role: 'role',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    price: 'price',
    duration: 'duration',
    isPopular: 'isPopular',
    emiAvailable: 'emiAvailable',
    image: 'image',
    image_url: 'image_url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const Course_bookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    status: 'status',
    paymentMode: 'paymentMode',
    paymentId: 'paymentId',
    amountPaid: 'amountPaid',
    bookedAt: 'bookedAt'
  };

  export type Course_bookingScalarFieldEnum = (typeof Course_bookingScalarFieldEnum)[keyof typeof Course_bookingScalarFieldEnum]


  export const Student_registrationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    program: 'program',
    status: 'status',
    gender: 'gender',
    background: 'background',
    created_at: 'created_at'
  };

  export type Student_registrationScalarFieldEnum = (typeof Student_registrationScalarFieldEnum)[keyof typeof Student_registrationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'role'
   */
  export type EnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role'>
    


  /**
   * Reference to a field of type 'role[]'
   */
  export type ListEnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMode'
   */
  export type EnumPaymentModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMode'>
    


  /**
   * Reference to a field of type 'PaymentMode[]'
   */
  export type ListEnumPaymentModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMode[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    gender?: StringFilter<"user"> | string
    mobile?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: EnumroleFilter<"user"> | $Enums.role
    created_at?: DateTimeFilter<"user"> | Date | string
    bookings?: Course_bookingListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    bookings?: course_bookingOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    mobile?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    gender?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: EnumroleFilter<"user"> | $Enums.role
    created_at?: DateTimeFilter<"user"> | Date | string
    bookings?: Course_bookingListRelationFilter
  }, "id" | "email" | "mobile">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    gender?: StringWithAggregatesFilter<"user"> | string
    mobile?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    role?: EnumroleWithAggregatesFilter<"user"> | $Enums.role
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type courseWhereInput = {
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    id?: IntFilter<"course"> | number
    title?: StringFilter<"course"> | string
    slug?: StringFilter<"course"> | string
    description?: StringFilter<"course"> | string
    price?: IntFilter<"course"> | number
    duration?: StringFilter<"course"> | string
    isPopular?: BoolFilter<"course"> | boolean
    emiAvailable?: BoolFilter<"course"> | boolean
    image?: StringFilter<"course"> | string
    image_url?: StringFilter<"course"> | string
    createdAt?: DateTimeFilter<"course"> | Date | string
    updatedAt?: DateTimeFilter<"course"> | Date | string
    bookings?: Course_bookingListRelationFilter
  }

  export type courseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    isPopular?: SortOrder
    emiAvailable?: SortOrder
    image?: SortOrder
    image_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: course_bookingOrderByRelationAggregateInput
  }

  export type courseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    slug?: StringFilter<"course"> | string
    description?: StringFilter<"course"> | string
    price?: IntFilter<"course"> | number
    duration?: StringFilter<"course"> | string
    isPopular?: BoolFilter<"course"> | boolean
    emiAvailable?: BoolFilter<"course"> | boolean
    image?: StringFilter<"course"> | string
    image_url?: StringFilter<"course"> | string
    createdAt?: DateTimeFilter<"course"> | Date | string
    updatedAt?: DateTimeFilter<"course"> | Date | string
    bookings?: Course_bookingListRelationFilter
  }, "id" | "title">

  export type courseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    isPopular?: SortOrder
    emiAvailable?: SortOrder
    image?: SortOrder
    image_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: courseCountOrderByAggregateInput
    _avg?: courseAvgOrderByAggregateInput
    _max?: courseMaxOrderByAggregateInput
    _min?: courseMinOrderByAggregateInput
    _sum?: courseSumOrderByAggregateInput
  }

  export type courseScalarWhereWithAggregatesInput = {
    AND?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    OR?: courseScalarWhereWithAggregatesInput[]
    NOT?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"course"> | number
    title?: StringWithAggregatesFilter<"course"> | string
    slug?: StringWithAggregatesFilter<"course"> | string
    description?: StringWithAggregatesFilter<"course"> | string
    price?: IntWithAggregatesFilter<"course"> | number
    duration?: StringWithAggregatesFilter<"course"> | string
    isPopular?: BoolWithAggregatesFilter<"course"> | boolean
    emiAvailable?: BoolWithAggregatesFilter<"course"> | boolean
    image?: StringWithAggregatesFilter<"course"> | string
    image_url?: StringWithAggregatesFilter<"course"> | string
    createdAt?: DateTimeWithAggregatesFilter<"course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"course"> | Date | string
  }

  export type course_bookingWhereInput = {
    AND?: course_bookingWhereInput | course_bookingWhereInput[]
    OR?: course_bookingWhereInput[]
    NOT?: course_bookingWhereInput | course_bookingWhereInput[]
    id?: IntFilter<"course_booking"> | number
    userId?: IntFilter<"course_booking"> | number
    courseId?: IntFilter<"course_booking"> | number
    status?: EnumBookingStatusFilter<"course_booking"> | $Enums.BookingStatus
    paymentMode?: EnumPaymentModeFilter<"course_booking"> | $Enums.PaymentMode
    paymentId?: StringNullableFilter<"course_booking"> | string | null
    amountPaid?: IntFilter<"course_booking"> | number
    bookedAt?: DateTimeFilter<"course_booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }

  export type course_bookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    status?: SortOrder
    paymentMode?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    amountPaid?: SortOrder
    bookedAt?: SortOrder
    user?: userOrderByWithRelationInput
    course?: courseOrderByWithRelationInput
  }

  export type course_bookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_courseId?: course_bookingUserIdCourseIdCompoundUniqueInput
    AND?: course_bookingWhereInput | course_bookingWhereInput[]
    OR?: course_bookingWhereInput[]
    NOT?: course_bookingWhereInput | course_bookingWhereInput[]
    userId?: IntFilter<"course_booking"> | number
    courseId?: IntFilter<"course_booking"> | number
    status?: EnumBookingStatusFilter<"course_booking"> | $Enums.BookingStatus
    paymentMode?: EnumPaymentModeFilter<"course_booking"> | $Enums.PaymentMode
    paymentId?: StringNullableFilter<"course_booking"> | string | null
    amountPaid?: IntFilter<"course_booking"> | number
    bookedAt?: DateTimeFilter<"course_booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }, "id" | "userId_courseId">

  export type course_bookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    status?: SortOrder
    paymentMode?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    amountPaid?: SortOrder
    bookedAt?: SortOrder
    _count?: course_bookingCountOrderByAggregateInput
    _avg?: course_bookingAvgOrderByAggregateInput
    _max?: course_bookingMaxOrderByAggregateInput
    _min?: course_bookingMinOrderByAggregateInput
    _sum?: course_bookingSumOrderByAggregateInput
  }

  export type course_bookingScalarWhereWithAggregatesInput = {
    AND?: course_bookingScalarWhereWithAggregatesInput | course_bookingScalarWhereWithAggregatesInput[]
    OR?: course_bookingScalarWhereWithAggregatesInput[]
    NOT?: course_bookingScalarWhereWithAggregatesInput | course_bookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"course_booking"> | number
    userId?: IntWithAggregatesFilter<"course_booking"> | number
    courseId?: IntWithAggregatesFilter<"course_booking"> | number
    status?: EnumBookingStatusWithAggregatesFilter<"course_booking"> | $Enums.BookingStatus
    paymentMode?: EnumPaymentModeWithAggregatesFilter<"course_booking"> | $Enums.PaymentMode
    paymentId?: StringNullableWithAggregatesFilter<"course_booking"> | string | null
    amountPaid?: IntWithAggregatesFilter<"course_booking"> | number
    bookedAt?: DateTimeWithAggregatesFilter<"course_booking"> | Date | string
  }

  export type student_registrationWhereInput = {
    AND?: student_registrationWhereInput | student_registrationWhereInput[]
    OR?: student_registrationWhereInput[]
    NOT?: student_registrationWhereInput | student_registrationWhereInput[]
    id?: IntFilter<"student_registration"> | number
    name?: StringFilter<"student_registration"> | string
    email?: StringFilter<"student_registration"> | string
    phone?: StringFilter<"student_registration"> | string
    program?: StringFilter<"student_registration"> | string
    status?: StringFilter<"student_registration"> | string
    gender?: StringFilter<"student_registration"> | string
    background?: StringNullableFilter<"student_registration"> | string | null
    created_at?: DateTimeFilter<"student_registration"> | Date | string
  }

  export type student_registrationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    program?: SortOrder
    status?: SortOrder
    gender?: SortOrder
    background?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type student_registrationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: student_registrationWhereInput | student_registrationWhereInput[]
    OR?: student_registrationWhereInput[]
    NOT?: student_registrationWhereInput | student_registrationWhereInput[]
    name?: StringFilter<"student_registration"> | string
    email?: StringFilter<"student_registration"> | string
    phone?: StringFilter<"student_registration"> | string
    program?: StringFilter<"student_registration"> | string
    status?: StringFilter<"student_registration"> | string
    gender?: StringFilter<"student_registration"> | string
    background?: StringNullableFilter<"student_registration"> | string | null
    created_at?: DateTimeFilter<"student_registration"> | Date | string
  }, "id">

  export type student_registrationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    program?: SortOrder
    status?: SortOrder
    gender?: SortOrder
    background?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: student_registrationCountOrderByAggregateInput
    _avg?: student_registrationAvgOrderByAggregateInput
    _max?: student_registrationMaxOrderByAggregateInput
    _min?: student_registrationMinOrderByAggregateInput
    _sum?: student_registrationSumOrderByAggregateInput
  }

  export type student_registrationScalarWhereWithAggregatesInput = {
    AND?: student_registrationScalarWhereWithAggregatesInput | student_registrationScalarWhereWithAggregatesInput[]
    OR?: student_registrationScalarWhereWithAggregatesInput[]
    NOT?: student_registrationScalarWhereWithAggregatesInput | student_registrationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"student_registration"> | number
    name?: StringWithAggregatesFilter<"student_registration"> | string
    email?: StringWithAggregatesFilter<"student_registration"> | string
    phone?: StringWithAggregatesFilter<"student_registration"> | string
    program?: StringWithAggregatesFilter<"student_registration"> | string
    status?: StringWithAggregatesFilter<"student_registration"> | string
    gender?: StringWithAggregatesFilter<"student_registration"> | string
    background?: StringNullableWithAggregatesFilter<"student_registration"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"student_registration"> | Date | string
  }

  export type userCreateInput = {
    name: string
    email: string
    gender: string
    mobile: string
    password: string
    role?: $Enums.role
    created_at?: Date | string
    bookings?: course_bookingCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    gender: string
    mobile: string
    password: string
    role?: $Enums.role
    created_at?: Date | string
    bookings?: course_bookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: course_bookingUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: course_bookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    email: string
    gender: string
    mobile: string
    password: string
    role?: $Enums.role
    created_at?: Date | string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseCreateInput = {
    title: string
    slug: string
    description: string
    price: number
    duration: string
    isPopular?: boolean
    emiAvailable?: boolean
    image: string
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: course_bookingCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateInput = {
    id?: number
    title: string
    slug: string
    description: string
    price: number
    duration: string
    isPopular?: boolean
    emiAvailable?: boolean
    image: string
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: course_bookingUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    emiAvailable?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: course_bookingUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    emiAvailable?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: course_bookingUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseCreateManyInput = {
    id?: number
    title: string
    slug: string
    description: string
    price: number
    duration: string
    isPopular?: boolean
    emiAvailable?: boolean
    image: string
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type courseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    emiAvailable?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    emiAvailable?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type course_bookingCreateInput = {
    status?: $Enums.BookingStatus
    paymentMode: $Enums.PaymentMode
    paymentId?: string | null
    amountPaid?: number
    bookedAt?: Date | string
    user: userCreateNestedOneWithoutBookingsInput
    course: courseCreateNestedOneWithoutBookingsInput
  }

  export type course_bookingUncheckedCreateInput = {
    id?: number
    userId: number
    courseId: number
    status?: $Enums.BookingStatus
    paymentMode: $Enums.PaymentMode
    paymentId?: string | null
    amountPaid?: number
    bookedAt?: Date | string
  }

  export type course_bookingUpdateInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentMode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amountPaid?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutBookingsNestedInput
    course?: courseUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type course_bookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentMode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amountPaid?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type course_bookingCreateManyInput = {
    id?: number
    userId: number
    courseId: number
    status?: $Enums.BookingStatus
    paymentMode: $Enums.PaymentMode
    paymentId?: string | null
    amountPaid?: number
    bookedAt?: Date | string
  }

  export type course_bookingUpdateManyMutationInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentMode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amountPaid?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type course_bookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentMode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amountPaid?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type student_registrationCreateInput = {
    name: string
    email: string
    phone: string
    program: string
    status: string
    gender: string
    background?: string | null
    created_at?: Date | string
  }

  export type student_registrationUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    program: string
    status: string
    gender: string
    background?: string | null
    created_at?: Date | string
  }

  export type student_registrationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    program?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    background?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type student_registrationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    program?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    background?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type student_registrationCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    program: string
    status: string
    gender: string
    background?: string | null
    created_at?: Date | string
  }

  export type student_registrationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    program?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    background?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type student_registrationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    program?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    background?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Course_bookingListRelationFilter = {
    every?: course_bookingWhereInput
    some?: course_bookingWhereInput
    none?: course_bookingWhereInput
  }

  export type course_bookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type courseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    isPopular?: SortOrder
    emiAvailable?: SortOrder
    image?: SortOrder
    image_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type courseAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type courseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    isPopular?: SortOrder
    emiAvailable?: SortOrder
    image?: SortOrder
    image_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type courseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    isPopular?: SortOrder
    emiAvailable?: SortOrder
    image?: SortOrder
    image_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type courseSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type EnumPaymentModeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMode | EnumPaymentModeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMode[] | ListEnumPaymentModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMode[] | ListEnumPaymentModeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentModeFilter<$PrismaModel> | $Enums.PaymentMode
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type CourseScalarRelationFilter = {
    is?: courseWhereInput
    isNot?: courseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type course_bookingUserIdCourseIdCompoundUniqueInput = {
    userId: number
    courseId: number
  }

  export type course_bookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    status?: SortOrder
    paymentMode?: SortOrder
    paymentId?: SortOrder
    amountPaid?: SortOrder
    bookedAt?: SortOrder
  }

  export type course_bookingAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    amountPaid?: SortOrder
  }

  export type course_bookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    status?: SortOrder
    paymentMode?: SortOrder
    paymentId?: SortOrder
    amountPaid?: SortOrder
    bookedAt?: SortOrder
  }

  export type course_bookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    status?: SortOrder
    paymentMode?: SortOrder
    paymentId?: SortOrder
    amountPaid?: SortOrder
    bookedAt?: SortOrder
  }

  export type course_bookingSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    amountPaid?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EnumPaymentModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMode | EnumPaymentModeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMode[] | ListEnumPaymentModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMode[] | ListEnumPaymentModeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentModeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentModeFilter<$PrismaModel>
    _max?: NestedEnumPaymentModeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type student_registrationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    program?: SortOrder
    status?: SortOrder
    gender?: SortOrder
    background?: SortOrder
    created_at?: SortOrder
  }

  export type student_registrationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type student_registrationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    program?: SortOrder
    status?: SortOrder
    gender?: SortOrder
    background?: SortOrder
    created_at?: SortOrder
  }

  export type student_registrationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    program?: SortOrder
    status?: SortOrder
    gender?: SortOrder
    background?: SortOrder
    created_at?: SortOrder
  }

  export type student_registrationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type course_bookingCreateNestedManyWithoutUserInput = {
    create?: XOR<course_bookingCreateWithoutUserInput, course_bookingUncheckedCreateWithoutUserInput> | course_bookingCreateWithoutUserInput[] | course_bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_bookingCreateOrConnectWithoutUserInput | course_bookingCreateOrConnectWithoutUserInput[]
    createMany?: course_bookingCreateManyUserInputEnvelope
    connect?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
  }

  export type course_bookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<course_bookingCreateWithoutUserInput, course_bookingUncheckedCreateWithoutUserInput> | course_bookingCreateWithoutUserInput[] | course_bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_bookingCreateOrConnectWithoutUserInput | course_bookingCreateOrConnectWithoutUserInput[]
    createMany?: course_bookingCreateManyUserInputEnvelope
    connect?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumroleFieldUpdateOperationsInput = {
    set?: $Enums.role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type course_bookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<course_bookingCreateWithoutUserInput, course_bookingUncheckedCreateWithoutUserInput> | course_bookingCreateWithoutUserInput[] | course_bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_bookingCreateOrConnectWithoutUserInput | course_bookingCreateOrConnectWithoutUserInput[]
    upsert?: course_bookingUpsertWithWhereUniqueWithoutUserInput | course_bookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: course_bookingCreateManyUserInputEnvelope
    set?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
    disconnect?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
    delete?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
    connect?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
    update?: course_bookingUpdateWithWhereUniqueWithoutUserInput | course_bookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: course_bookingUpdateManyWithWhereWithoutUserInput | course_bookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: course_bookingScalarWhereInput | course_bookingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type course_bookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<course_bookingCreateWithoutUserInput, course_bookingUncheckedCreateWithoutUserInput> | course_bookingCreateWithoutUserInput[] | course_bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_bookingCreateOrConnectWithoutUserInput | course_bookingCreateOrConnectWithoutUserInput[]
    upsert?: course_bookingUpsertWithWhereUniqueWithoutUserInput | course_bookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: course_bookingCreateManyUserInputEnvelope
    set?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
    disconnect?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
    delete?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
    connect?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
    update?: course_bookingUpdateWithWhereUniqueWithoutUserInput | course_bookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: course_bookingUpdateManyWithWhereWithoutUserInput | course_bookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: course_bookingScalarWhereInput | course_bookingScalarWhereInput[]
  }

  export type course_bookingCreateNestedManyWithoutCourseInput = {
    create?: XOR<course_bookingCreateWithoutCourseInput, course_bookingUncheckedCreateWithoutCourseInput> | course_bookingCreateWithoutCourseInput[] | course_bookingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_bookingCreateOrConnectWithoutCourseInput | course_bookingCreateOrConnectWithoutCourseInput[]
    createMany?: course_bookingCreateManyCourseInputEnvelope
    connect?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
  }

  export type course_bookingUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<course_bookingCreateWithoutCourseInput, course_bookingUncheckedCreateWithoutCourseInput> | course_bookingCreateWithoutCourseInput[] | course_bookingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_bookingCreateOrConnectWithoutCourseInput | course_bookingCreateOrConnectWithoutCourseInput[]
    createMany?: course_bookingCreateManyCourseInputEnvelope
    connect?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type course_bookingUpdateManyWithoutCourseNestedInput = {
    create?: XOR<course_bookingCreateWithoutCourseInput, course_bookingUncheckedCreateWithoutCourseInput> | course_bookingCreateWithoutCourseInput[] | course_bookingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_bookingCreateOrConnectWithoutCourseInput | course_bookingCreateOrConnectWithoutCourseInput[]
    upsert?: course_bookingUpsertWithWhereUniqueWithoutCourseInput | course_bookingUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: course_bookingCreateManyCourseInputEnvelope
    set?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
    disconnect?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
    delete?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
    connect?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
    update?: course_bookingUpdateWithWhereUniqueWithoutCourseInput | course_bookingUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: course_bookingUpdateManyWithWhereWithoutCourseInput | course_bookingUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: course_bookingScalarWhereInput | course_bookingScalarWhereInput[]
  }

  export type course_bookingUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<course_bookingCreateWithoutCourseInput, course_bookingUncheckedCreateWithoutCourseInput> | course_bookingCreateWithoutCourseInput[] | course_bookingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_bookingCreateOrConnectWithoutCourseInput | course_bookingCreateOrConnectWithoutCourseInput[]
    upsert?: course_bookingUpsertWithWhereUniqueWithoutCourseInput | course_bookingUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: course_bookingCreateManyCourseInputEnvelope
    set?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
    disconnect?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
    delete?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
    connect?: course_bookingWhereUniqueInput | course_bookingWhereUniqueInput[]
    update?: course_bookingUpdateWithWhereUniqueWithoutCourseInput | course_bookingUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: course_bookingUpdateManyWithWhereWithoutCourseInput | course_bookingUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: course_bookingScalarWhereInput | course_bookingScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutBookingsInput = {
    create?: XOR<userCreateWithoutBookingsInput, userUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: userCreateOrConnectWithoutBookingsInput
    connect?: userWhereUniqueInput
  }

  export type courseCreateNestedOneWithoutBookingsInput = {
    create?: XOR<courseCreateWithoutBookingsInput, courseUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: courseCreateOrConnectWithoutBookingsInput
    connect?: courseWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type EnumPaymentModeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMode
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type userUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<userCreateWithoutBookingsInput, userUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: userCreateOrConnectWithoutBookingsInput
    upsert?: userUpsertWithoutBookingsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutBookingsInput, userUpdateWithoutBookingsInput>, userUncheckedUpdateWithoutBookingsInput>
  }

  export type courseUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<courseCreateWithoutBookingsInput, courseUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: courseCreateOrConnectWithoutBookingsInput
    upsert?: courseUpsertWithoutBookingsInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutBookingsInput, courseUpdateWithoutBookingsInput>, courseUncheckedUpdateWithoutBookingsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumPaymentModeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMode | EnumPaymentModeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMode[] | ListEnumPaymentModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMode[] | ListEnumPaymentModeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentModeFilter<$PrismaModel> | $Enums.PaymentMode
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMode | EnumPaymentModeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMode[] | ListEnumPaymentModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMode[] | ListEnumPaymentModeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentModeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentModeFilter<$PrismaModel>
    _max?: NestedEnumPaymentModeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type course_bookingCreateWithoutUserInput = {
    status?: $Enums.BookingStatus
    paymentMode: $Enums.PaymentMode
    paymentId?: string | null
    amountPaid?: number
    bookedAt?: Date | string
    course: courseCreateNestedOneWithoutBookingsInput
  }

  export type course_bookingUncheckedCreateWithoutUserInput = {
    id?: number
    courseId: number
    status?: $Enums.BookingStatus
    paymentMode: $Enums.PaymentMode
    paymentId?: string | null
    amountPaid?: number
    bookedAt?: Date | string
  }

  export type course_bookingCreateOrConnectWithoutUserInput = {
    where: course_bookingWhereUniqueInput
    create: XOR<course_bookingCreateWithoutUserInput, course_bookingUncheckedCreateWithoutUserInput>
  }

  export type course_bookingCreateManyUserInputEnvelope = {
    data: course_bookingCreateManyUserInput | course_bookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type course_bookingUpsertWithWhereUniqueWithoutUserInput = {
    where: course_bookingWhereUniqueInput
    update: XOR<course_bookingUpdateWithoutUserInput, course_bookingUncheckedUpdateWithoutUserInput>
    create: XOR<course_bookingCreateWithoutUserInput, course_bookingUncheckedCreateWithoutUserInput>
  }

  export type course_bookingUpdateWithWhereUniqueWithoutUserInput = {
    where: course_bookingWhereUniqueInput
    data: XOR<course_bookingUpdateWithoutUserInput, course_bookingUncheckedUpdateWithoutUserInput>
  }

  export type course_bookingUpdateManyWithWhereWithoutUserInput = {
    where: course_bookingScalarWhereInput
    data: XOR<course_bookingUpdateManyMutationInput, course_bookingUncheckedUpdateManyWithoutUserInput>
  }

  export type course_bookingScalarWhereInput = {
    AND?: course_bookingScalarWhereInput | course_bookingScalarWhereInput[]
    OR?: course_bookingScalarWhereInput[]
    NOT?: course_bookingScalarWhereInput | course_bookingScalarWhereInput[]
    id?: IntFilter<"course_booking"> | number
    userId?: IntFilter<"course_booking"> | number
    courseId?: IntFilter<"course_booking"> | number
    status?: EnumBookingStatusFilter<"course_booking"> | $Enums.BookingStatus
    paymentMode?: EnumPaymentModeFilter<"course_booking"> | $Enums.PaymentMode
    paymentId?: StringNullableFilter<"course_booking"> | string | null
    amountPaid?: IntFilter<"course_booking"> | number
    bookedAt?: DateTimeFilter<"course_booking"> | Date | string
  }

  export type course_bookingCreateWithoutCourseInput = {
    status?: $Enums.BookingStatus
    paymentMode: $Enums.PaymentMode
    paymentId?: string | null
    amountPaid?: number
    bookedAt?: Date | string
    user: userCreateNestedOneWithoutBookingsInput
  }

  export type course_bookingUncheckedCreateWithoutCourseInput = {
    id?: number
    userId: number
    status?: $Enums.BookingStatus
    paymentMode: $Enums.PaymentMode
    paymentId?: string | null
    amountPaid?: number
    bookedAt?: Date | string
  }

  export type course_bookingCreateOrConnectWithoutCourseInput = {
    where: course_bookingWhereUniqueInput
    create: XOR<course_bookingCreateWithoutCourseInput, course_bookingUncheckedCreateWithoutCourseInput>
  }

  export type course_bookingCreateManyCourseInputEnvelope = {
    data: course_bookingCreateManyCourseInput | course_bookingCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type course_bookingUpsertWithWhereUniqueWithoutCourseInput = {
    where: course_bookingWhereUniqueInput
    update: XOR<course_bookingUpdateWithoutCourseInput, course_bookingUncheckedUpdateWithoutCourseInput>
    create: XOR<course_bookingCreateWithoutCourseInput, course_bookingUncheckedCreateWithoutCourseInput>
  }

  export type course_bookingUpdateWithWhereUniqueWithoutCourseInput = {
    where: course_bookingWhereUniqueInput
    data: XOR<course_bookingUpdateWithoutCourseInput, course_bookingUncheckedUpdateWithoutCourseInput>
  }

  export type course_bookingUpdateManyWithWhereWithoutCourseInput = {
    where: course_bookingScalarWhereInput
    data: XOR<course_bookingUpdateManyMutationInput, course_bookingUncheckedUpdateManyWithoutCourseInput>
  }

  export type userCreateWithoutBookingsInput = {
    name: string
    email: string
    gender: string
    mobile: string
    password: string
    role?: $Enums.role
    created_at?: Date | string
  }

  export type userUncheckedCreateWithoutBookingsInput = {
    id?: number
    name: string
    email: string
    gender: string
    mobile: string
    password: string
    role?: $Enums.role
    created_at?: Date | string
  }

  export type userCreateOrConnectWithoutBookingsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutBookingsInput, userUncheckedCreateWithoutBookingsInput>
  }

  export type courseCreateWithoutBookingsInput = {
    title: string
    slug: string
    description: string
    price: number
    duration: string
    isPopular?: boolean
    emiAvailable?: boolean
    image: string
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type courseUncheckedCreateWithoutBookingsInput = {
    id?: number
    title: string
    slug: string
    description: string
    price: number
    duration: string
    isPopular?: boolean
    emiAvailable?: boolean
    image: string
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type courseCreateOrConnectWithoutBookingsInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutBookingsInput, courseUncheckedCreateWithoutBookingsInput>
  }

  export type userUpsertWithoutBookingsInput = {
    update: XOR<userUpdateWithoutBookingsInput, userUncheckedUpdateWithoutBookingsInput>
    create: XOR<userCreateWithoutBookingsInput, userUncheckedCreateWithoutBookingsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutBookingsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutBookingsInput, userUncheckedUpdateWithoutBookingsInput>
  }

  export type userUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseUpsertWithoutBookingsInput = {
    update: XOR<courseUpdateWithoutBookingsInput, courseUncheckedUpdateWithoutBookingsInput>
    create: XOR<courseCreateWithoutBookingsInput, courseUncheckedCreateWithoutBookingsInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutBookingsInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutBookingsInput, courseUncheckedUpdateWithoutBookingsInput>
  }

  export type courseUpdateWithoutBookingsInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    emiAvailable?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    emiAvailable?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type course_bookingCreateManyUserInput = {
    id?: number
    courseId: number
    status?: $Enums.BookingStatus
    paymentMode: $Enums.PaymentMode
    paymentId?: string | null
    amountPaid?: number
    bookedAt?: Date | string
  }

  export type course_bookingUpdateWithoutUserInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentMode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amountPaid?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: courseUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type course_bookingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentMode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amountPaid?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type course_bookingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentMode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amountPaid?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type course_bookingCreateManyCourseInput = {
    id?: number
    userId: number
    status?: $Enums.BookingStatus
    paymentMode: $Enums.PaymentMode
    paymentId?: string | null
    amountPaid?: number
    bookedAt?: Date | string
  }

  export type course_bookingUpdateWithoutCourseInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentMode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amountPaid?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type course_bookingUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentMode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amountPaid?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type course_bookingUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentMode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amountPaid?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}