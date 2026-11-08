
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Credential
 * 
 */
export type Credential = $Result.DefaultSelection<Prisma.$CredentialPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model MaterialProgress
 * 
 */
export type MaterialProgress = $Result.DefaultSelection<Prisma.$MaterialProgressPayload>
/**
 * Model QuizBest
 * 
 */
export type QuizBest = $Result.DefaultSelection<Prisma.$QuizBestPayload>
/**
 * Model TryoutAttempt
 * 
 */
export type TryoutAttempt = $Result.DefaultSelection<Prisma.$TryoutAttemptPayload>
/**
 * Model ChecklistProgress
 * 
 */
export type ChecklistProgress = $Result.DefaultSelection<Prisma.$ChecklistProgressPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.credential`: Exposes CRUD operations for the **Credential** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credentials
    * const credentials = await prisma.credential.findMany()
    * ```
    */
  get credential(): Prisma.CredentialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materialProgress`: Exposes CRUD operations for the **MaterialProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaterialProgresses
    * const materialProgresses = await prisma.materialProgress.findMany()
    * ```
    */
  get materialProgress(): Prisma.MaterialProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizBest`: Exposes CRUD operations for the **QuizBest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizBests
    * const quizBests = await prisma.quizBest.findMany()
    * ```
    */
  get quizBest(): Prisma.QuizBestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tryoutAttempt`: Exposes CRUD operations for the **TryoutAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TryoutAttempts
    * const tryoutAttempts = await prisma.tryoutAttempt.findMany()
    * ```
    */
  get tryoutAttempt(): Prisma.TryoutAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checklistProgress`: Exposes CRUD operations for the **ChecklistProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChecklistProgresses
    * const checklistProgresses = await prisma.checklistProgress.findMany()
    * ```
    */
  get checklistProgress(): Prisma.ChecklistProgressDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    User: 'User',
    Account: 'Account',
    Credential: 'Credential',
    Session: 'Session',
    Verification: 'Verification',
    MaterialProgress: 'MaterialProgress',
    QuizBest: 'QuizBest',
    TryoutAttempt: 'TryoutAttempt',
    ChecklistProgress: 'ChecklistProgress'
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
      modelProps: "user" | "account" | "credential" | "session" | "verification" | "materialProgress" | "quizBest" | "tryoutAttempt" | "checklistProgress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Credential: {
        payload: Prisma.$CredentialPayload<ExtArgs>
        fields: Prisma.CredentialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CredentialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CredentialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          findFirst: {
            args: Prisma.CredentialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CredentialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          findMany: {
            args: Prisma.CredentialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>[]
          }
          create: {
            args: Prisma.CredentialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          createMany: {
            args: Prisma.CredentialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CredentialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>[]
          }
          delete: {
            args: Prisma.CredentialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          update: {
            args: Prisma.CredentialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          deleteMany: {
            args: Prisma.CredentialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CredentialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CredentialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>[]
          }
          upsert: {
            args: Prisma.CredentialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          aggregate: {
            args: Prisma.CredentialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredential>
          }
          groupBy: {
            args: Prisma.CredentialGroupByArgs<ExtArgs>
            result: $Utils.Optional<CredentialGroupByOutputType>[]
          }
          count: {
            args: Prisma.CredentialCountArgs<ExtArgs>
            result: $Utils.Optional<CredentialCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      MaterialProgress: {
        payload: Prisma.$MaterialProgressPayload<ExtArgs>
        fields: Prisma.MaterialProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialProgressPayload>
          }
          findFirst: {
            args: Prisma.MaterialProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialProgressPayload>
          }
          findMany: {
            args: Prisma.MaterialProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialProgressPayload>[]
          }
          create: {
            args: Prisma.MaterialProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialProgressPayload>
          }
          createMany: {
            args: Prisma.MaterialProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialProgressPayload>[]
          }
          delete: {
            args: Prisma.MaterialProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialProgressPayload>
          }
          update: {
            args: Prisma.MaterialProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialProgressPayload>
          }
          deleteMany: {
            args: Prisma.MaterialProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialProgressPayload>[]
          }
          upsert: {
            args: Prisma.MaterialProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialProgressPayload>
          }
          aggregate: {
            args: Prisma.MaterialProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterialProgress>
          }
          groupBy: {
            args: Prisma.MaterialProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialProgressCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialProgressCountAggregateOutputType> | number
          }
        }
      }
      QuizBest: {
        payload: Prisma.$QuizBestPayload<ExtArgs>
        fields: Prisma.QuizBestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizBestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizBestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBestPayload>
          }
          findFirst: {
            args: Prisma.QuizBestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizBestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBestPayload>
          }
          findMany: {
            args: Prisma.QuizBestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBestPayload>[]
          }
          create: {
            args: Prisma.QuizBestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBestPayload>
          }
          createMany: {
            args: Prisma.QuizBestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizBestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBestPayload>[]
          }
          delete: {
            args: Prisma.QuizBestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBestPayload>
          }
          update: {
            args: Prisma.QuizBestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBestPayload>
          }
          deleteMany: {
            args: Prisma.QuizBestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizBestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizBestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBestPayload>[]
          }
          upsert: {
            args: Prisma.QuizBestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizBestPayload>
          }
          aggregate: {
            args: Prisma.QuizBestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizBest>
          }
          groupBy: {
            args: Prisma.QuizBestGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizBestGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizBestCountArgs<ExtArgs>
            result: $Utils.Optional<QuizBestCountAggregateOutputType> | number
          }
        }
      }
      TryoutAttempt: {
        payload: Prisma.$TryoutAttemptPayload<ExtArgs>
        fields: Prisma.TryoutAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TryoutAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TryoutAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TryoutAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TryoutAttemptPayload>
          }
          findFirst: {
            args: Prisma.TryoutAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TryoutAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TryoutAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TryoutAttemptPayload>
          }
          findMany: {
            args: Prisma.TryoutAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TryoutAttemptPayload>[]
          }
          create: {
            args: Prisma.TryoutAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TryoutAttemptPayload>
          }
          createMany: {
            args: Prisma.TryoutAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TryoutAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TryoutAttemptPayload>[]
          }
          delete: {
            args: Prisma.TryoutAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TryoutAttemptPayload>
          }
          update: {
            args: Prisma.TryoutAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TryoutAttemptPayload>
          }
          deleteMany: {
            args: Prisma.TryoutAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TryoutAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TryoutAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TryoutAttemptPayload>[]
          }
          upsert: {
            args: Prisma.TryoutAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TryoutAttemptPayload>
          }
          aggregate: {
            args: Prisma.TryoutAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTryoutAttempt>
          }
          groupBy: {
            args: Prisma.TryoutAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<TryoutAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.TryoutAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<TryoutAttemptCountAggregateOutputType> | number
          }
        }
      }
      ChecklistProgress: {
        payload: Prisma.$ChecklistProgressPayload<ExtArgs>
        fields: Prisma.ChecklistProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChecklistProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChecklistProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistProgressPayload>
          }
          findFirst: {
            args: Prisma.ChecklistProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChecklistProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistProgressPayload>
          }
          findMany: {
            args: Prisma.ChecklistProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistProgressPayload>[]
          }
          create: {
            args: Prisma.ChecklistProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistProgressPayload>
          }
          createMany: {
            args: Prisma.ChecklistProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChecklistProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistProgressPayload>[]
          }
          delete: {
            args: Prisma.ChecklistProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistProgressPayload>
          }
          update: {
            args: Prisma.ChecklistProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistProgressPayload>
          }
          deleteMany: {
            args: Prisma.ChecklistProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChecklistProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChecklistProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistProgressPayload>[]
          }
          upsert: {
            args: Prisma.ChecklistProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistProgressPayload>
          }
          aggregate: {
            args: Prisma.ChecklistProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChecklistProgress>
          }
          groupBy: {
            args: Prisma.ChecklistProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChecklistProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChecklistProgressCountArgs<ExtArgs>
            result: $Utils.Optional<ChecklistProgressCountAggregateOutputType> | number
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
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
    user?: UserOmit
    account?: AccountOmit
    credential?: CredentialOmit
    session?: SessionOmit
    verification?: VerificationOmit
    materialProgress?: MaterialProgressOmit
    quizBest?: QuizBestOmit
    tryoutAttempt?: TryoutAttemptOmit
    checklistProgress?: ChecklistProgressOmit
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
    accounts: number
    credentials: number
    sessions: number
    materialProgress: number
    quizBest: number
    tryoutAttempts: number
    checklistProgress: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    credentials?: boolean | UserCountOutputTypeCountCredentialsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    materialProgress?: boolean | UserCountOutputTypeCountMaterialProgressArgs
    quizBest?: boolean | UserCountOutputTypeCountQuizBestArgs
    tryoutAttempts?: boolean | UserCountOutputTypeCountTryoutAttemptsArgs
    checklistProgress?: boolean | UserCountOutputTypeCountChecklistProgressArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCredentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CredentialWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMaterialProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuizBestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizBestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTryoutAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TryoutAttemptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChecklistProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistProgressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    role: number
    banned: number
    banReason: number
    banExpires: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    credentials?: boolean | User$credentialsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    materialProgress?: boolean | User$materialProgressArgs<ExtArgs>
    quizBest?: boolean | User$quizBestArgs<ExtArgs>
    tryoutAttempts?: boolean | User$tryoutAttemptsArgs<ExtArgs>
    checklistProgress?: boolean | User$checklistProgressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt" | "role" | "banned" | "banReason" | "banExpires", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    credentials?: boolean | User$credentialsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    materialProgress?: boolean | User$materialProgressArgs<ExtArgs>
    quizBest?: boolean | User$quizBestArgs<ExtArgs>
    tryoutAttempts?: boolean | User$tryoutAttemptsArgs<ExtArgs>
    checklistProgress?: boolean | User$checklistProgressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      credentials: Prisma.$CredentialPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      materialProgress: Prisma.$MaterialProgressPayload<ExtArgs>[]
      quizBest: Prisma.$QuizBestPayload<ExtArgs>[]
      tryoutAttempts: Prisma.$TryoutAttemptPayload<ExtArgs>[]
      checklistProgress: Prisma.$ChecklistProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
      role: string | null
      banned: boolean | null
      banReason: string | null
      banExpires: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    credentials<T extends User$credentialsArgs<ExtArgs> = {}>(args?: Subset<T, User$credentialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    materialProgress<T extends User$materialProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$materialProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizBest<T extends User$quizBestArgs<ExtArgs> = {}>(args?: Subset<T, User$quizBestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizBestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tryoutAttempts<T extends User$tryoutAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, User$tryoutAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TryoutAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checklistProgress<T extends User$checklistProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$checklistProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'String'>
    readonly banned: FieldRef<"User", 'Boolean'>
    readonly banReason: FieldRef<"User", 'String'>
    readonly banExpires: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.credentials
   */
  export type User$credentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    where?: CredentialWhereInput
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    cursor?: CredentialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.materialProgress
   */
  export type User$materialProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialProgress
     */
    select?: MaterialProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialProgress
     */
    omit?: MaterialProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialProgressInclude<ExtArgs> | null
    where?: MaterialProgressWhereInput
    orderBy?: MaterialProgressOrderByWithRelationInput | MaterialProgressOrderByWithRelationInput[]
    cursor?: MaterialProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialProgressScalarFieldEnum | MaterialProgressScalarFieldEnum[]
  }

  /**
   * User.quizBest
   */
  export type User$quizBestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBest
     */
    select?: QuizBestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBest
     */
    omit?: QuizBestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizBestInclude<ExtArgs> | null
    where?: QuizBestWhereInput
    orderBy?: QuizBestOrderByWithRelationInput | QuizBestOrderByWithRelationInput[]
    cursor?: QuizBestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizBestScalarFieldEnum | QuizBestScalarFieldEnum[]
  }

  /**
   * User.tryoutAttempts
   */
  export type User$tryoutAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TryoutAttempt
     */
    select?: TryoutAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TryoutAttempt
     */
    omit?: TryoutAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TryoutAttemptInclude<ExtArgs> | null
    where?: TryoutAttemptWhereInput
    orderBy?: TryoutAttemptOrderByWithRelationInput | TryoutAttemptOrderByWithRelationInput[]
    cursor?: TryoutAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TryoutAttemptScalarFieldEnum | TryoutAttemptScalarFieldEnum[]
  }

  /**
   * User.checklistProgress
   */
  export type User$checklistProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistProgress
     */
    select?: ChecklistProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistProgress
     */
    omit?: ChecklistProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistProgressInclude<ExtArgs> | null
    where?: ChecklistProgressWhereInput
    orderBy?: ChecklistProgressOrderByWithRelationInput | ChecklistProgressOrderByWithRelationInput[]
    cursor?: ChecklistProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChecklistProgressScalarFieldEnum | ChecklistProgressScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    providerAccountId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    tokenType: string | null
    scope: string | null
    idToken: string | null
    sessionState: string | null
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
    providerId: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    password: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    providerAccountId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    tokenType: string | null
    scope: string | null
    idToken: string | null
    sessionState: string | null
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
    providerId: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    password: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    providerAccountId: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    tokenType: number
    scope: number
    idToken: number
    sessionState: number
    createdAt: number
    updatedAt: number
    accountId: number
    providerId: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    password: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    tokenType?: true
    scope?: true
    idToken?: true
    sessionState?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    providerId?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    password?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    tokenType?: true
    scope?: true
    idToken?: true
    sessionState?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    providerId?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    password?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    tokenType?: true
    scope?: true
    idToken?: true
    sessionState?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    providerId?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    password?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    provider: string | null
    providerAccountId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    tokenType: string | null
    scope: string | null
    idToken: string | null
    sessionState: string | null
    createdAt: Date
    updatedAt: Date
    accountId: string
    providerId: string
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    password: string | null
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    tokenType?: boolean
    scope?: boolean
    idToken?: boolean
    sessionState?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    providerId?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    password?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    tokenType?: boolean
    scope?: boolean
    idToken?: boolean
    sessionState?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    providerId?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    password?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    tokenType?: boolean
    scope?: boolean
    idToken?: boolean
    sessionState?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    providerId?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    password?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    tokenType?: boolean
    scope?: boolean
    idToken?: boolean
    sessionState?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    providerId?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    password?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "providerAccountId" | "accessToken" | "refreshToken" | "expiresAt" | "tokenType" | "scope" | "idToken" | "sessionState" | "createdAt" | "updatedAt" | "accountId" | "providerId" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "password", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      provider: string | null
      providerAccountId: string | null
      accessToken: string | null
      refreshToken: string | null
      expiresAt: Date | null
      tokenType: string | null
      scope: string | null
      idToken: string | null
      sessionState: string | null
      createdAt: Date
      updatedAt: Date
      accountId: string
      providerId: string
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      password: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly expiresAt: FieldRef<"Account", 'DateTime'>
    readonly tokenType: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly sessionState: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly password: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Credential
   */

  export type AggregateCredential = {
    _count: CredentialCountAggregateOutputType | null
    _min: CredentialMinAggregateOutputType | null
    _max: CredentialMaxAggregateOutputType | null
  }

  export type CredentialMinAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    providerId: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CredentialMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    providerId: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CredentialCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    providerId: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CredentialMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerId?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CredentialMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerId?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CredentialCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerId?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CredentialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credential to aggregate.
     */
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Credentials
    **/
    _count?: true | CredentialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CredentialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CredentialMaxAggregateInputType
  }

  export type GetCredentialAggregateType<T extends CredentialAggregateArgs> = {
        [P in keyof T & keyof AggregateCredential]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredential[P]>
      : GetScalarType<T[P], AggregateCredential[P]>
  }




  export type CredentialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CredentialWhereInput
    orderBy?: CredentialOrderByWithAggregationInput | CredentialOrderByWithAggregationInput[]
    by: CredentialScalarFieldEnum[] | CredentialScalarFieldEnum
    having?: CredentialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CredentialCountAggregateInputType | true
    _min?: CredentialMinAggregateInputType
    _max?: CredentialMaxAggregateInputType
  }

  export type CredentialGroupByOutputType = {
    id: string
    userId: string
    provider: string
    providerId: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: CredentialCountAggregateOutputType | null
    _min: CredentialMinAggregateOutputType | null
    _max: CredentialMaxAggregateOutputType | null
  }

  type GetCredentialGroupByPayload<T extends CredentialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CredentialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CredentialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CredentialGroupByOutputType[P]>
            : GetScalarType<T[P], CredentialGroupByOutputType[P]>
        }
      >
    >


  export type CredentialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credential"]>

  export type CredentialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credential"]>

  export type CredentialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credential"]>

  export type CredentialSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CredentialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "providerId" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["credential"]>
  export type CredentialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CredentialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CredentialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CredentialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Credential"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      provider: string
      providerId: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["credential"]>
    composites: {}
  }

  type CredentialGetPayload<S extends boolean | null | undefined | CredentialDefaultArgs> = $Result.GetResult<Prisma.$CredentialPayload, S>

  type CredentialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CredentialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CredentialCountAggregateInputType | true
    }

  export interface CredentialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Credential'], meta: { name: 'Credential' } }
    /**
     * Find zero or one Credential that matches the filter.
     * @param {CredentialFindUniqueArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CredentialFindUniqueArgs>(args: SelectSubset<T, CredentialFindUniqueArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Credential that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CredentialFindUniqueOrThrowArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CredentialFindUniqueOrThrowArgs>(args: SelectSubset<T, CredentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialFindFirstArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CredentialFindFirstArgs>(args?: SelectSubset<T, CredentialFindFirstArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credential that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialFindFirstOrThrowArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CredentialFindFirstOrThrowArgs>(args?: SelectSubset<T, CredentialFindFirstOrThrowArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credentials
     * const credentials = await prisma.credential.findMany()
     * 
     * // Get first 10 Credentials
     * const credentials = await prisma.credential.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const credentialWithIdOnly = await prisma.credential.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CredentialFindManyArgs>(args?: SelectSubset<T, CredentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Credential.
     * @param {CredentialCreateArgs} args - Arguments to create a Credential.
     * @example
     * // Create one Credential
     * const Credential = await prisma.credential.create({
     *   data: {
     *     // ... data to create a Credential
     *   }
     * })
     * 
     */
    create<T extends CredentialCreateArgs>(args: SelectSubset<T, CredentialCreateArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Credentials.
     * @param {CredentialCreateManyArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credential = await prisma.credential.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CredentialCreateManyArgs>(args?: SelectSubset<T, CredentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Credentials and returns the data saved in the database.
     * @param {CredentialCreateManyAndReturnArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credential = await prisma.credential.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Credentials and only return the `id`
     * const credentialWithIdOnly = await prisma.credential.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CredentialCreateManyAndReturnArgs>(args?: SelectSubset<T, CredentialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Credential.
     * @param {CredentialDeleteArgs} args - Arguments to delete one Credential.
     * @example
     * // Delete one Credential
     * const Credential = await prisma.credential.delete({
     *   where: {
     *     // ... filter to delete one Credential
     *   }
     * })
     * 
     */
    delete<T extends CredentialDeleteArgs>(args: SelectSubset<T, CredentialDeleteArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Credential.
     * @param {CredentialUpdateArgs} args - Arguments to update one Credential.
     * @example
     * // Update one Credential
     * const credential = await prisma.credential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CredentialUpdateArgs>(args: SelectSubset<T, CredentialUpdateArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Credentials.
     * @param {CredentialDeleteManyArgs} args - Arguments to filter Credentials to delete.
     * @example
     * // Delete a few Credentials
     * const { count } = await prisma.credential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CredentialDeleteManyArgs>(args?: SelectSubset<T, CredentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credentials
     * const credential = await prisma.credential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CredentialUpdateManyArgs>(args: SelectSubset<T, CredentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials and returns the data updated in the database.
     * @param {CredentialUpdateManyAndReturnArgs} args - Arguments to update many Credentials.
     * @example
     * // Update many Credentials
     * const credential = await prisma.credential.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Credentials and only return the `id`
     * const credentialWithIdOnly = await prisma.credential.updateManyAndReturn({
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
    updateManyAndReturn<T extends CredentialUpdateManyAndReturnArgs>(args: SelectSubset<T, CredentialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Credential.
     * @param {CredentialUpsertArgs} args - Arguments to update or create a Credential.
     * @example
     * // Update or create a Credential
     * const credential = await prisma.credential.upsert({
     *   create: {
     *     // ... data to create a Credential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credential we want to update
     *   }
     * })
     */
    upsert<T extends CredentialUpsertArgs>(args: SelectSubset<T, CredentialUpsertArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialCountArgs} args - Arguments to filter Credentials to count.
     * @example
     * // Count the number of Credentials
     * const count = await prisma.credential.count({
     *   where: {
     *     // ... the filter for the Credentials we want to count
     *   }
     * })
    **/
    count<T extends CredentialCountArgs>(
      args?: Subset<T, CredentialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CredentialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CredentialAggregateArgs>(args: Subset<T, CredentialAggregateArgs>): Prisma.PrismaPromise<GetCredentialAggregateType<T>>

    /**
     * Group by Credential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialGroupByArgs} args - Group by arguments.
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
      T extends CredentialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CredentialGroupByArgs['orderBy'] }
        : { orderBy?: CredentialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CredentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Credential model
   */
  readonly fields: CredentialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Credential.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CredentialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Credential model
   */
  interface CredentialFieldRefs {
    readonly id: FieldRef<"Credential", 'String'>
    readonly userId: FieldRef<"Credential", 'String'>
    readonly provider: FieldRef<"Credential", 'String'>
    readonly providerId: FieldRef<"Credential", 'String'>
    readonly password: FieldRef<"Credential", 'String'>
    readonly createdAt: FieldRef<"Credential", 'DateTime'>
    readonly updatedAt: FieldRef<"Credential", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Credential findUnique
   */
  export type CredentialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * Filter, which Credential to fetch.
     */
    where: CredentialWhereUniqueInput
  }

  /**
   * Credential findUniqueOrThrow
   */
  export type CredentialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * Filter, which Credential to fetch.
     */
    where: CredentialWhereUniqueInput
  }

  /**
   * Credential findFirst
   */
  export type CredentialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * Filter, which Credential to fetch.
     */
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credentials.
     */
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credentials.
     */
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }

  /**
   * Credential findFirstOrThrow
   */
  export type CredentialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * Filter, which Credential to fetch.
     */
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credentials.
     */
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credentials.
     */
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }

  /**
   * Credential findMany
   */
  export type CredentialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Credentials.
     */
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credentials.
     */
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }

  /**
   * Credential create
   */
  export type CredentialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * The data needed to create a Credential.
     */
    data: XOR<CredentialCreateInput, CredentialUncheckedCreateInput>
  }

  /**
   * Credential createMany
   */
  export type CredentialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Credentials.
     */
    data: CredentialCreateManyInput | CredentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Credential createManyAndReturn
   */
  export type CredentialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * The data used to create many Credentials.
     */
    data: CredentialCreateManyInput | CredentialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Credential update
   */
  export type CredentialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * The data needed to update a Credential.
     */
    data: XOR<CredentialUpdateInput, CredentialUncheckedUpdateInput>
    /**
     * Choose, which Credential to update.
     */
    where: CredentialWhereUniqueInput
  }

  /**
   * Credential updateMany
   */
  export type CredentialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Credentials.
     */
    data: XOR<CredentialUpdateManyMutationInput, CredentialUncheckedUpdateManyInput>
    /**
     * Filter which Credentials to update
     */
    where?: CredentialWhereInput
    /**
     * Limit how many Credentials to update.
     */
    limit?: number
  }

  /**
   * Credential updateManyAndReturn
   */
  export type CredentialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * The data used to update Credentials.
     */
    data: XOR<CredentialUpdateManyMutationInput, CredentialUncheckedUpdateManyInput>
    /**
     * Filter which Credentials to update
     */
    where?: CredentialWhereInput
    /**
     * Limit how many Credentials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Credential upsert
   */
  export type CredentialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * The filter to search for the Credential to update in case it exists.
     */
    where: CredentialWhereUniqueInput
    /**
     * In case the Credential found by the `where` argument doesn't exist, create a new Credential with this data.
     */
    create: XOR<CredentialCreateInput, CredentialUncheckedCreateInput>
    /**
     * In case the Credential was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CredentialUpdateInput, CredentialUncheckedUpdateInput>
  }

  /**
   * Credential delete
   */
  export type CredentialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * Filter which Credential to delete.
     */
    where: CredentialWhereUniqueInput
  }

  /**
   * Credential deleteMany
   */
  export type CredentialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credentials to delete
     */
    where?: CredentialWhereInput
    /**
     * Limit how many Credentials to delete.
     */
    limit?: number
  }

  /**
   * Credential without action
   */
  export type CredentialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
    token: string | null
    impersonatedBy: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
    token: string | null
    impersonatedBy: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expiresAt: number
    ipAddress: number
    userAgent: number
    createdAt: number
    updatedAt: number
    token: number
    impersonatedBy: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
    token?: true
    impersonatedBy?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
    token?: true
    impersonatedBy?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
    token?: true
    impersonatedBy?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    expiresAt: Date
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    updatedAt: Date
    token: string
    impersonatedBy: string | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token?: boolean
    impersonatedBy?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expiresAt" | "ipAddress" | "userAgent" | "createdAt" | "updatedAt" | "token" | "impersonatedBy", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      expiresAt: Date
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
      updatedAt: Date
      token: string
      impersonatedBy: string | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly impersonatedBy: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model MaterialProgress
   */

  export type AggregateMaterialProgress = {
    _count: MaterialProgressCountAggregateOutputType | null
    _min: MaterialProgressMinAggregateOutputType | null
    _max: MaterialProgressMaxAggregateOutputType | null
  }

  export type MaterialProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    materialSlug: string | null
    done: boolean | null
    completedAt: Date | null
  }

  export type MaterialProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    materialSlug: string | null
    done: boolean | null
    completedAt: Date | null
  }

  export type MaterialProgressCountAggregateOutputType = {
    id: number
    userId: number
    materialSlug: number
    done: number
    completedAt: number
    _all: number
  }


  export type MaterialProgressMinAggregateInputType = {
    id?: true
    userId?: true
    materialSlug?: true
    done?: true
    completedAt?: true
  }

  export type MaterialProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    materialSlug?: true
    done?: true
    completedAt?: true
  }

  export type MaterialProgressCountAggregateInputType = {
    id?: true
    userId?: true
    materialSlug?: true
    done?: true
    completedAt?: true
    _all?: true
  }

  export type MaterialProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialProgress to aggregate.
     */
    where?: MaterialProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialProgresses to fetch.
     */
    orderBy?: MaterialProgressOrderByWithRelationInput | MaterialProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaterialProgresses
    **/
    _count?: true | MaterialProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialProgressMaxAggregateInputType
  }

  export type GetMaterialProgressAggregateType<T extends MaterialProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterialProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterialProgress[P]>
      : GetScalarType<T[P], AggregateMaterialProgress[P]>
  }




  export type MaterialProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialProgressWhereInput
    orderBy?: MaterialProgressOrderByWithAggregationInput | MaterialProgressOrderByWithAggregationInput[]
    by: MaterialProgressScalarFieldEnum[] | MaterialProgressScalarFieldEnum
    having?: MaterialProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialProgressCountAggregateInputType | true
    _min?: MaterialProgressMinAggregateInputType
    _max?: MaterialProgressMaxAggregateInputType
  }

  export type MaterialProgressGroupByOutputType = {
    id: string
    userId: string
    materialSlug: string
    done: boolean
    completedAt: Date
    _count: MaterialProgressCountAggregateOutputType | null
    _min: MaterialProgressMinAggregateOutputType | null
    _max: MaterialProgressMaxAggregateOutputType | null
  }

  type GetMaterialProgressGroupByPayload<T extends MaterialProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialProgressGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialProgressGroupByOutputType[P]>
        }
      >
    >


  export type MaterialProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    materialSlug?: boolean
    done?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialProgress"]>

  export type MaterialProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    materialSlug?: boolean
    done?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialProgress"]>

  export type MaterialProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    materialSlug?: boolean
    done?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialProgress"]>

  export type MaterialProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    materialSlug?: boolean
    done?: boolean
    completedAt?: boolean
  }

  export type MaterialProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "materialSlug" | "done" | "completedAt", ExtArgs["result"]["materialProgress"]>
  export type MaterialProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MaterialProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MaterialProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MaterialProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaterialProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      materialSlug: string
      done: boolean
      completedAt: Date
    }, ExtArgs["result"]["materialProgress"]>
    composites: {}
  }

  type MaterialProgressGetPayload<S extends boolean | null | undefined | MaterialProgressDefaultArgs> = $Result.GetResult<Prisma.$MaterialProgressPayload, S>

  type MaterialProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialProgressCountAggregateInputType | true
    }

  export interface MaterialProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaterialProgress'], meta: { name: 'MaterialProgress' } }
    /**
     * Find zero or one MaterialProgress that matches the filter.
     * @param {MaterialProgressFindUniqueArgs} args - Arguments to find a MaterialProgress
     * @example
     * // Get one MaterialProgress
     * const materialProgress = await prisma.materialProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialProgressFindUniqueArgs>(args: SelectSubset<T, MaterialProgressFindUniqueArgs<ExtArgs>>): Prisma__MaterialProgressClient<$Result.GetResult<Prisma.$MaterialProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaterialProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialProgressFindUniqueOrThrowArgs} args - Arguments to find a MaterialProgress
     * @example
     * // Get one MaterialProgress
     * const materialProgress = await prisma.materialProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialProgressClient<$Result.GetResult<Prisma.$MaterialProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaterialProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialProgressFindFirstArgs} args - Arguments to find a MaterialProgress
     * @example
     * // Get one MaterialProgress
     * const materialProgress = await prisma.materialProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialProgressFindFirstArgs>(args?: SelectSubset<T, MaterialProgressFindFirstArgs<ExtArgs>>): Prisma__MaterialProgressClient<$Result.GetResult<Prisma.$MaterialProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaterialProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialProgressFindFirstOrThrowArgs} args - Arguments to find a MaterialProgress
     * @example
     * // Get one MaterialProgress
     * const materialProgress = await prisma.materialProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialProgressClient<$Result.GetResult<Prisma.$MaterialProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaterialProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaterialProgresses
     * const materialProgresses = await prisma.materialProgress.findMany()
     * 
     * // Get first 10 MaterialProgresses
     * const materialProgresses = await prisma.materialProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialProgressWithIdOnly = await prisma.materialProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialProgressFindManyArgs>(args?: SelectSubset<T, MaterialProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaterialProgress.
     * @param {MaterialProgressCreateArgs} args - Arguments to create a MaterialProgress.
     * @example
     * // Create one MaterialProgress
     * const MaterialProgress = await prisma.materialProgress.create({
     *   data: {
     *     // ... data to create a MaterialProgress
     *   }
     * })
     * 
     */
    create<T extends MaterialProgressCreateArgs>(args: SelectSubset<T, MaterialProgressCreateArgs<ExtArgs>>): Prisma__MaterialProgressClient<$Result.GetResult<Prisma.$MaterialProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaterialProgresses.
     * @param {MaterialProgressCreateManyArgs} args - Arguments to create many MaterialProgresses.
     * @example
     * // Create many MaterialProgresses
     * const materialProgress = await prisma.materialProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialProgressCreateManyArgs>(args?: SelectSubset<T, MaterialProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaterialProgresses and returns the data saved in the database.
     * @param {MaterialProgressCreateManyAndReturnArgs} args - Arguments to create many MaterialProgresses.
     * @example
     * // Create many MaterialProgresses
     * const materialProgress = await prisma.materialProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaterialProgresses and only return the `id`
     * const materialProgressWithIdOnly = await prisma.materialProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaterialProgress.
     * @param {MaterialProgressDeleteArgs} args - Arguments to delete one MaterialProgress.
     * @example
     * // Delete one MaterialProgress
     * const MaterialProgress = await prisma.materialProgress.delete({
     *   where: {
     *     // ... filter to delete one MaterialProgress
     *   }
     * })
     * 
     */
    delete<T extends MaterialProgressDeleteArgs>(args: SelectSubset<T, MaterialProgressDeleteArgs<ExtArgs>>): Prisma__MaterialProgressClient<$Result.GetResult<Prisma.$MaterialProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaterialProgress.
     * @param {MaterialProgressUpdateArgs} args - Arguments to update one MaterialProgress.
     * @example
     * // Update one MaterialProgress
     * const materialProgress = await prisma.materialProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialProgressUpdateArgs>(args: SelectSubset<T, MaterialProgressUpdateArgs<ExtArgs>>): Prisma__MaterialProgressClient<$Result.GetResult<Prisma.$MaterialProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaterialProgresses.
     * @param {MaterialProgressDeleteManyArgs} args - Arguments to filter MaterialProgresses to delete.
     * @example
     * // Delete a few MaterialProgresses
     * const { count } = await prisma.materialProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialProgressDeleteManyArgs>(args?: SelectSubset<T, MaterialProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaterialProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaterialProgresses
     * const materialProgress = await prisma.materialProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialProgressUpdateManyArgs>(args: SelectSubset<T, MaterialProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaterialProgresses and returns the data updated in the database.
     * @param {MaterialProgressUpdateManyAndReturnArgs} args - Arguments to update many MaterialProgresses.
     * @example
     * // Update many MaterialProgresses
     * const materialProgress = await prisma.materialProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaterialProgresses and only return the `id`
     * const materialProgressWithIdOnly = await prisma.materialProgress.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaterialProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaterialProgress.
     * @param {MaterialProgressUpsertArgs} args - Arguments to update or create a MaterialProgress.
     * @example
     * // Update or create a MaterialProgress
     * const materialProgress = await prisma.materialProgress.upsert({
     *   create: {
     *     // ... data to create a MaterialProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaterialProgress we want to update
     *   }
     * })
     */
    upsert<T extends MaterialProgressUpsertArgs>(args: SelectSubset<T, MaterialProgressUpsertArgs<ExtArgs>>): Prisma__MaterialProgressClient<$Result.GetResult<Prisma.$MaterialProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaterialProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialProgressCountArgs} args - Arguments to filter MaterialProgresses to count.
     * @example
     * // Count the number of MaterialProgresses
     * const count = await prisma.materialProgress.count({
     *   where: {
     *     // ... the filter for the MaterialProgresses we want to count
     *   }
     * })
    **/
    count<T extends MaterialProgressCountArgs>(
      args?: Subset<T, MaterialProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaterialProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialProgressAggregateArgs>(args: Subset<T, MaterialProgressAggregateArgs>): Prisma.PrismaPromise<GetMaterialProgressAggregateType<T>>

    /**
     * Group by MaterialProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialProgressGroupByArgs} args - Group by arguments.
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
      T extends MaterialProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialProgressGroupByArgs['orderBy'] }
        : { orderBy?: MaterialProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaterialProgress model
   */
  readonly fields: MaterialProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaterialProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MaterialProgress model
   */
  interface MaterialProgressFieldRefs {
    readonly id: FieldRef<"MaterialProgress", 'String'>
    readonly userId: FieldRef<"MaterialProgress", 'String'>
    readonly materialSlug: FieldRef<"MaterialProgress", 'String'>
    readonly done: FieldRef<"MaterialProgress", 'Boolean'>
    readonly completedAt: FieldRef<"MaterialProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaterialProgress findUnique
   */
  export type MaterialProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialProgress
     */
    select?: MaterialProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialProgress
     */
    omit?: MaterialProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialProgressInclude<ExtArgs> | null
    /**
     * Filter, which MaterialProgress to fetch.
     */
    where: MaterialProgressWhereUniqueInput
  }

  /**
   * MaterialProgress findUniqueOrThrow
   */
  export type MaterialProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialProgress
     */
    select?: MaterialProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialProgress
     */
    omit?: MaterialProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialProgressInclude<ExtArgs> | null
    /**
     * Filter, which MaterialProgress to fetch.
     */
    where: MaterialProgressWhereUniqueInput
  }

  /**
   * MaterialProgress findFirst
   */
  export type MaterialProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialProgress
     */
    select?: MaterialProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialProgress
     */
    omit?: MaterialProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialProgressInclude<ExtArgs> | null
    /**
     * Filter, which MaterialProgress to fetch.
     */
    where?: MaterialProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialProgresses to fetch.
     */
    orderBy?: MaterialProgressOrderByWithRelationInput | MaterialProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialProgresses.
     */
    cursor?: MaterialProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialProgresses.
     */
    distinct?: MaterialProgressScalarFieldEnum | MaterialProgressScalarFieldEnum[]
  }

  /**
   * MaterialProgress findFirstOrThrow
   */
  export type MaterialProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialProgress
     */
    select?: MaterialProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialProgress
     */
    omit?: MaterialProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialProgressInclude<ExtArgs> | null
    /**
     * Filter, which MaterialProgress to fetch.
     */
    where?: MaterialProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialProgresses to fetch.
     */
    orderBy?: MaterialProgressOrderByWithRelationInput | MaterialProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialProgresses.
     */
    cursor?: MaterialProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialProgresses.
     */
    distinct?: MaterialProgressScalarFieldEnum | MaterialProgressScalarFieldEnum[]
  }

  /**
   * MaterialProgress findMany
   */
  export type MaterialProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialProgress
     */
    select?: MaterialProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialProgress
     */
    omit?: MaterialProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialProgressInclude<ExtArgs> | null
    /**
     * Filter, which MaterialProgresses to fetch.
     */
    where?: MaterialProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialProgresses to fetch.
     */
    orderBy?: MaterialProgressOrderByWithRelationInput | MaterialProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaterialProgresses.
     */
    cursor?: MaterialProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialProgresses.
     */
    distinct?: MaterialProgressScalarFieldEnum | MaterialProgressScalarFieldEnum[]
  }

  /**
   * MaterialProgress create
   */
  export type MaterialProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialProgress
     */
    select?: MaterialProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialProgress
     */
    omit?: MaterialProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a MaterialProgress.
     */
    data: XOR<MaterialProgressCreateInput, MaterialProgressUncheckedCreateInput>
  }

  /**
   * MaterialProgress createMany
   */
  export type MaterialProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaterialProgresses.
     */
    data: MaterialProgressCreateManyInput | MaterialProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaterialProgress createManyAndReturn
   */
  export type MaterialProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialProgress
     */
    select?: MaterialProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialProgress
     */
    omit?: MaterialProgressOmit<ExtArgs> | null
    /**
     * The data used to create many MaterialProgresses.
     */
    data: MaterialProgressCreateManyInput | MaterialProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaterialProgress update
   */
  export type MaterialProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialProgress
     */
    select?: MaterialProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialProgress
     */
    omit?: MaterialProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a MaterialProgress.
     */
    data: XOR<MaterialProgressUpdateInput, MaterialProgressUncheckedUpdateInput>
    /**
     * Choose, which MaterialProgress to update.
     */
    where: MaterialProgressWhereUniqueInput
  }

  /**
   * MaterialProgress updateMany
   */
  export type MaterialProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaterialProgresses.
     */
    data: XOR<MaterialProgressUpdateManyMutationInput, MaterialProgressUncheckedUpdateManyInput>
    /**
     * Filter which MaterialProgresses to update
     */
    where?: MaterialProgressWhereInput
    /**
     * Limit how many MaterialProgresses to update.
     */
    limit?: number
  }

  /**
   * MaterialProgress updateManyAndReturn
   */
  export type MaterialProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialProgress
     */
    select?: MaterialProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialProgress
     */
    omit?: MaterialProgressOmit<ExtArgs> | null
    /**
     * The data used to update MaterialProgresses.
     */
    data: XOR<MaterialProgressUpdateManyMutationInput, MaterialProgressUncheckedUpdateManyInput>
    /**
     * Filter which MaterialProgresses to update
     */
    where?: MaterialProgressWhereInput
    /**
     * Limit how many MaterialProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaterialProgress upsert
   */
  export type MaterialProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialProgress
     */
    select?: MaterialProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialProgress
     */
    omit?: MaterialProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the MaterialProgress to update in case it exists.
     */
    where: MaterialProgressWhereUniqueInput
    /**
     * In case the MaterialProgress found by the `where` argument doesn't exist, create a new MaterialProgress with this data.
     */
    create: XOR<MaterialProgressCreateInput, MaterialProgressUncheckedCreateInput>
    /**
     * In case the MaterialProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialProgressUpdateInput, MaterialProgressUncheckedUpdateInput>
  }

  /**
   * MaterialProgress delete
   */
  export type MaterialProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialProgress
     */
    select?: MaterialProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialProgress
     */
    omit?: MaterialProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialProgressInclude<ExtArgs> | null
    /**
     * Filter which MaterialProgress to delete.
     */
    where: MaterialProgressWhereUniqueInput
  }

  /**
   * MaterialProgress deleteMany
   */
  export type MaterialProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialProgresses to delete
     */
    where?: MaterialProgressWhereInput
    /**
     * Limit how many MaterialProgresses to delete.
     */
    limit?: number
  }

  /**
   * MaterialProgress without action
   */
  export type MaterialProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialProgress
     */
    select?: MaterialProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialProgress
     */
    omit?: MaterialProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialProgressInclude<ExtArgs> | null
  }


  /**
   * Model QuizBest
   */

  export type AggregateQuizBest = {
    _count: QuizBestCountAggregateOutputType | null
    _avg: QuizBestAvgAggregateOutputType | null
    _sum: QuizBestSumAggregateOutputType | null
    _min: QuizBestMinAggregateOutputType | null
    _max: QuizBestMaxAggregateOutputType | null
  }

  export type QuizBestAvgAggregateOutputType = {
    bestScore: number | null
    totalQuestions: number | null
  }

  export type QuizBestSumAggregateOutputType = {
    bestScore: number | null
    totalQuestions: number | null
  }

  export type QuizBestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    materialSlug: string | null
    bestScore: number | null
    totalQuestions: number | null
    updatedAt: Date | null
  }

  export type QuizBestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    materialSlug: string | null
    bestScore: number | null
    totalQuestions: number | null
    updatedAt: Date | null
  }

  export type QuizBestCountAggregateOutputType = {
    id: number
    userId: number
    materialSlug: number
    bestScore: number
    totalQuestions: number
    updatedAt: number
    _all: number
  }


  export type QuizBestAvgAggregateInputType = {
    bestScore?: true
    totalQuestions?: true
  }

  export type QuizBestSumAggregateInputType = {
    bestScore?: true
    totalQuestions?: true
  }

  export type QuizBestMinAggregateInputType = {
    id?: true
    userId?: true
    materialSlug?: true
    bestScore?: true
    totalQuestions?: true
    updatedAt?: true
  }

  export type QuizBestMaxAggregateInputType = {
    id?: true
    userId?: true
    materialSlug?: true
    bestScore?: true
    totalQuestions?: true
    updatedAt?: true
  }

  export type QuizBestCountAggregateInputType = {
    id?: true
    userId?: true
    materialSlug?: true
    bestScore?: true
    totalQuestions?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizBestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizBest to aggregate.
     */
    where?: QuizBestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizBests to fetch.
     */
    orderBy?: QuizBestOrderByWithRelationInput | QuizBestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizBestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizBests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizBests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizBests
    **/
    _count?: true | QuizBestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizBestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizBestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizBestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizBestMaxAggregateInputType
  }

  export type GetQuizBestAggregateType<T extends QuizBestAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizBest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizBest[P]>
      : GetScalarType<T[P], AggregateQuizBest[P]>
  }




  export type QuizBestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizBestWhereInput
    orderBy?: QuizBestOrderByWithAggregationInput | QuizBestOrderByWithAggregationInput[]
    by: QuizBestScalarFieldEnum[] | QuizBestScalarFieldEnum
    having?: QuizBestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizBestCountAggregateInputType | true
    _avg?: QuizBestAvgAggregateInputType
    _sum?: QuizBestSumAggregateInputType
    _min?: QuizBestMinAggregateInputType
    _max?: QuizBestMaxAggregateInputType
  }

  export type QuizBestGroupByOutputType = {
    id: string
    userId: string
    materialSlug: string
    bestScore: number
    totalQuestions: number
    updatedAt: Date
    _count: QuizBestCountAggregateOutputType | null
    _avg: QuizBestAvgAggregateOutputType | null
    _sum: QuizBestSumAggregateOutputType | null
    _min: QuizBestMinAggregateOutputType | null
    _max: QuizBestMaxAggregateOutputType | null
  }

  type GetQuizBestGroupByPayload<T extends QuizBestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizBestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizBestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizBestGroupByOutputType[P]>
            : GetScalarType<T[P], QuizBestGroupByOutputType[P]>
        }
      >
    >


  export type QuizBestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    materialSlug?: boolean
    bestScore?: boolean
    totalQuestions?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizBest"]>

  export type QuizBestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    materialSlug?: boolean
    bestScore?: boolean
    totalQuestions?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizBest"]>

  export type QuizBestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    materialSlug?: boolean
    bestScore?: boolean
    totalQuestions?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizBest"]>

  export type QuizBestSelectScalar = {
    id?: boolean
    userId?: boolean
    materialSlug?: boolean
    bestScore?: boolean
    totalQuestions?: boolean
    updatedAt?: boolean
  }

  export type QuizBestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "materialSlug" | "bestScore" | "totalQuestions" | "updatedAt", ExtArgs["result"]["quizBest"]>
  export type QuizBestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuizBestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuizBestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuizBestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizBest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      materialSlug: string
      bestScore: number
      totalQuestions: number
      updatedAt: Date
    }, ExtArgs["result"]["quizBest"]>
    composites: {}
  }

  type QuizBestGetPayload<S extends boolean | null | undefined | QuizBestDefaultArgs> = $Result.GetResult<Prisma.$QuizBestPayload, S>

  type QuizBestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizBestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizBestCountAggregateInputType | true
    }

  export interface QuizBestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizBest'], meta: { name: 'QuizBest' } }
    /**
     * Find zero or one QuizBest that matches the filter.
     * @param {QuizBestFindUniqueArgs} args - Arguments to find a QuizBest
     * @example
     * // Get one QuizBest
     * const quizBest = await prisma.quizBest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizBestFindUniqueArgs>(args: SelectSubset<T, QuizBestFindUniqueArgs<ExtArgs>>): Prisma__QuizBestClient<$Result.GetResult<Prisma.$QuizBestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizBest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizBestFindUniqueOrThrowArgs} args - Arguments to find a QuizBest
     * @example
     * // Get one QuizBest
     * const quizBest = await prisma.quizBest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizBestFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizBestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizBestClient<$Result.GetResult<Prisma.$QuizBestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizBest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBestFindFirstArgs} args - Arguments to find a QuizBest
     * @example
     * // Get one QuizBest
     * const quizBest = await prisma.quizBest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizBestFindFirstArgs>(args?: SelectSubset<T, QuizBestFindFirstArgs<ExtArgs>>): Prisma__QuizBestClient<$Result.GetResult<Prisma.$QuizBestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizBest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBestFindFirstOrThrowArgs} args - Arguments to find a QuizBest
     * @example
     * // Get one QuizBest
     * const quizBest = await prisma.quizBest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizBestFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizBestFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizBestClient<$Result.GetResult<Prisma.$QuizBestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizBests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizBests
     * const quizBests = await prisma.quizBest.findMany()
     * 
     * // Get first 10 QuizBests
     * const quizBests = await prisma.quizBest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizBestWithIdOnly = await prisma.quizBest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizBestFindManyArgs>(args?: SelectSubset<T, QuizBestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizBestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizBest.
     * @param {QuizBestCreateArgs} args - Arguments to create a QuizBest.
     * @example
     * // Create one QuizBest
     * const QuizBest = await prisma.quizBest.create({
     *   data: {
     *     // ... data to create a QuizBest
     *   }
     * })
     * 
     */
    create<T extends QuizBestCreateArgs>(args: SelectSubset<T, QuizBestCreateArgs<ExtArgs>>): Prisma__QuizBestClient<$Result.GetResult<Prisma.$QuizBestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizBests.
     * @param {QuizBestCreateManyArgs} args - Arguments to create many QuizBests.
     * @example
     * // Create many QuizBests
     * const quizBest = await prisma.quizBest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizBestCreateManyArgs>(args?: SelectSubset<T, QuizBestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizBests and returns the data saved in the database.
     * @param {QuizBestCreateManyAndReturnArgs} args - Arguments to create many QuizBests.
     * @example
     * // Create many QuizBests
     * const quizBest = await prisma.quizBest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizBests and only return the `id`
     * const quizBestWithIdOnly = await prisma.quizBest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizBestCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizBestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizBestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizBest.
     * @param {QuizBestDeleteArgs} args - Arguments to delete one QuizBest.
     * @example
     * // Delete one QuizBest
     * const QuizBest = await prisma.quizBest.delete({
     *   where: {
     *     // ... filter to delete one QuizBest
     *   }
     * })
     * 
     */
    delete<T extends QuizBestDeleteArgs>(args: SelectSubset<T, QuizBestDeleteArgs<ExtArgs>>): Prisma__QuizBestClient<$Result.GetResult<Prisma.$QuizBestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizBest.
     * @param {QuizBestUpdateArgs} args - Arguments to update one QuizBest.
     * @example
     * // Update one QuizBest
     * const quizBest = await prisma.quizBest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizBestUpdateArgs>(args: SelectSubset<T, QuizBestUpdateArgs<ExtArgs>>): Prisma__QuizBestClient<$Result.GetResult<Prisma.$QuizBestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizBests.
     * @param {QuizBestDeleteManyArgs} args - Arguments to filter QuizBests to delete.
     * @example
     * // Delete a few QuizBests
     * const { count } = await prisma.quizBest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizBestDeleteManyArgs>(args?: SelectSubset<T, QuizBestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizBests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizBests
     * const quizBest = await prisma.quizBest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizBestUpdateManyArgs>(args: SelectSubset<T, QuizBestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizBests and returns the data updated in the database.
     * @param {QuizBestUpdateManyAndReturnArgs} args - Arguments to update many QuizBests.
     * @example
     * // Update many QuizBests
     * const quizBest = await prisma.quizBest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizBests and only return the `id`
     * const quizBestWithIdOnly = await prisma.quizBest.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizBestUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizBestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizBestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizBest.
     * @param {QuizBestUpsertArgs} args - Arguments to update or create a QuizBest.
     * @example
     * // Update or create a QuizBest
     * const quizBest = await prisma.quizBest.upsert({
     *   create: {
     *     // ... data to create a QuizBest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizBest we want to update
     *   }
     * })
     */
    upsert<T extends QuizBestUpsertArgs>(args: SelectSubset<T, QuizBestUpsertArgs<ExtArgs>>): Prisma__QuizBestClient<$Result.GetResult<Prisma.$QuizBestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizBests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBestCountArgs} args - Arguments to filter QuizBests to count.
     * @example
     * // Count the number of QuizBests
     * const count = await prisma.quizBest.count({
     *   where: {
     *     // ... the filter for the QuizBests we want to count
     *   }
     * })
    **/
    count<T extends QuizBestCountArgs>(
      args?: Subset<T, QuizBestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizBestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizBest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizBestAggregateArgs>(args: Subset<T, QuizBestAggregateArgs>): Prisma.PrismaPromise<GetQuizBestAggregateType<T>>

    /**
     * Group by QuizBest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizBestGroupByArgs} args - Group by arguments.
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
      T extends QuizBestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizBestGroupByArgs['orderBy'] }
        : { orderBy?: QuizBestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizBestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizBestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizBest model
   */
  readonly fields: QuizBestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizBest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizBestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuizBest model
   */
  interface QuizBestFieldRefs {
    readonly id: FieldRef<"QuizBest", 'String'>
    readonly userId: FieldRef<"QuizBest", 'String'>
    readonly materialSlug: FieldRef<"QuizBest", 'String'>
    readonly bestScore: FieldRef<"QuizBest", 'Int'>
    readonly totalQuestions: FieldRef<"QuizBest", 'Int'>
    readonly updatedAt: FieldRef<"QuizBest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizBest findUnique
   */
  export type QuizBestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBest
     */
    select?: QuizBestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBest
     */
    omit?: QuizBestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizBestInclude<ExtArgs> | null
    /**
     * Filter, which QuizBest to fetch.
     */
    where: QuizBestWhereUniqueInput
  }

  /**
   * QuizBest findUniqueOrThrow
   */
  export type QuizBestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBest
     */
    select?: QuizBestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBest
     */
    omit?: QuizBestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizBestInclude<ExtArgs> | null
    /**
     * Filter, which QuizBest to fetch.
     */
    where: QuizBestWhereUniqueInput
  }

  /**
   * QuizBest findFirst
   */
  export type QuizBestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBest
     */
    select?: QuizBestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBest
     */
    omit?: QuizBestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizBestInclude<ExtArgs> | null
    /**
     * Filter, which QuizBest to fetch.
     */
    where?: QuizBestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizBests to fetch.
     */
    orderBy?: QuizBestOrderByWithRelationInput | QuizBestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizBests.
     */
    cursor?: QuizBestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizBests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizBests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizBests.
     */
    distinct?: QuizBestScalarFieldEnum | QuizBestScalarFieldEnum[]
  }

  /**
   * QuizBest findFirstOrThrow
   */
  export type QuizBestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBest
     */
    select?: QuizBestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBest
     */
    omit?: QuizBestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizBestInclude<ExtArgs> | null
    /**
     * Filter, which QuizBest to fetch.
     */
    where?: QuizBestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizBests to fetch.
     */
    orderBy?: QuizBestOrderByWithRelationInput | QuizBestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizBests.
     */
    cursor?: QuizBestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizBests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizBests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizBests.
     */
    distinct?: QuizBestScalarFieldEnum | QuizBestScalarFieldEnum[]
  }

  /**
   * QuizBest findMany
   */
  export type QuizBestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBest
     */
    select?: QuizBestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBest
     */
    omit?: QuizBestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizBestInclude<ExtArgs> | null
    /**
     * Filter, which QuizBests to fetch.
     */
    where?: QuizBestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizBests to fetch.
     */
    orderBy?: QuizBestOrderByWithRelationInput | QuizBestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizBests.
     */
    cursor?: QuizBestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizBests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizBests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizBests.
     */
    distinct?: QuizBestScalarFieldEnum | QuizBestScalarFieldEnum[]
  }

  /**
   * QuizBest create
   */
  export type QuizBestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBest
     */
    select?: QuizBestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBest
     */
    omit?: QuizBestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizBestInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizBest.
     */
    data: XOR<QuizBestCreateInput, QuizBestUncheckedCreateInput>
  }

  /**
   * QuizBest createMany
   */
  export type QuizBestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizBests.
     */
    data: QuizBestCreateManyInput | QuizBestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizBest createManyAndReturn
   */
  export type QuizBestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBest
     */
    select?: QuizBestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBest
     */
    omit?: QuizBestOmit<ExtArgs> | null
    /**
     * The data used to create many QuizBests.
     */
    data: QuizBestCreateManyInput | QuizBestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizBestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizBest update
   */
  export type QuizBestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBest
     */
    select?: QuizBestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBest
     */
    omit?: QuizBestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizBestInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizBest.
     */
    data: XOR<QuizBestUpdateInput, QuizBestUncheckedUpdateInput>
    /**
     * Choose, which QuizBest to update.
     */
    where: QuizBestWhereUniqueInput
  }

  /**
   * QuizBest updateMany
   */
  export type QuizBestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizBests.
     */
    data: XOR<QuizBestUpdateManyMutationInput, QuizBestUncheckedUpdateManyInput>
    /**
     * Filter which QuizBests to update
     */
    where?: QuizBestWhereInput
    /**
     * Limit how many QuizBests to update.
     */
    limit?: number
  }

  /**
   * QuizBest updateManyAndReturn
   */
  export type QuizBestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBest
     */
    select?: QuizBestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBest
     */
    omit?: QuizBestOmit<ExtArgs> | null
    /**
     * The data used to update QuizBests.
     */
    data: XOR<QuizBestUpdateManyMutationInput, QuizBestUncheckedUpdateManyInput>
    /**
     * Filter which QuizBests to update
     */
    where?: QuizBestWhereInput
    /**
     * Limit how many QuizBests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizBestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizBest upsert
   */
  export type QuizBestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBest
     */
    select?: QuizBestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBest
     */
    omit?: QuizBestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizBestInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizBest to update in case it exists.
     */
    where: QuizBestWhereUniqueInput
    /**
     * In case the QuizBest found by the `where` argument doesn't exist, create a new QuizBest with this data.
     */
    create: XOR<QuizBestCreateInput, QuizBestUncheckedCreateInput>
    /**
     * In case the QuizBest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizBestUpdateInput, QuizBestUncheckedUpdateInput>
  }

  /**
   * QuizBest delete
   */
  export type QuizBestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBest
     */
    select?: QuizBestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBest
     */
    omit?: QuizBestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizBestInclude<ExtArgs> | null
    /**
     * Filter which QuizBest to delete.
     */
    where: QuizBestWhereUniqueInput
  }

  /**
   * QuizBest deleteMany
   */
  export type QuizBestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizBests to delete
     */
    where?: QuizBestWhereInput
    /**
     * Limit how many QuizBests to delete.
     */
    limit?: number
  }

  /**
   * QuizBest without action
   */
  export type QuizBestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizBest
     */
    select?: QuizBestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizBest
     */
    omit?: QuizBestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizBestInclude<ExtArgs> | null
  }


  /**
   * Model TryoutAttempt
   */

  export type AggregateTryoutAttempt = {
    _count: TryoutAttemptCountAggregateOutputType | null
    _avg: TryoutAttemptAvgAggregateOutputType | null
    _sum: TryoutAttemptSumAggregateOutputType | null
    _min: TryoutAttemptMinAggregateOutputType | null
    _max: TryoutAttemptMaxAggregateOutputType | null
  }

  export type TryoutAttemptAvgAggregateOutputType = {
    twk: number | null
    tiu: number | null
    tkp: number | null
    total: number | null
    durationSeconds: number | null
  }

  export type TryoutAttemptSumAggregateOutputType = {
    twk: number | null
    tiu: number | null
    tkp: number | null
    total: number | null
    durationSeconds: number | null
  }

  export type TryoutAttemptMinAggregateOutputType = {
    id: string | null
    userId: string | null
    twk: number | null
    tiu: number | null
    tkp: number | null
    total: number | null
    passed: boolean | null
    durationSeconds: number | null
    createdAt: Date | null
  }

  export type TryoutAttemptMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    twk: number | null
    tiu: number | null
    tkp: number | null
    total: number | null
    passed: boolean | null
    durationSeconds: number | null
    createdAt: Date | null
  }

  export type TryoutAttemptCountAggregateOutputType = {
    id: number
    userId: number
    twk: number
    tiu: number
    tkp: number
    total: number
    passed: number
    durationSeconds: number
    answers: number
    createdAt: number
    _all: number
  }


  export type TryoutAttemptAvgAggregateInputType = {
    twk?: true
    tiu?: true
    tkp?: true
    total?: true
    durationSeconds?: true
  }

  export type TryoutAttemptSumAggregateInputType = {
    twk?: true
    tiu?: true
    tkp?: true
    total?: true
    durationSeconds?: true
  }

  export type TryoutAttemptMinAggregateInputType = {
    id?: true
    userId?: true
    twk?: true
    tiu?: true
    tkp?: true
    total?: true
    passed?: true
    durationSeconds?: true
    createdAt?: true
  }

  export type TryoutAttemptMaxAggregateInputType = {
    id?: true
    userId?: true
    twk?: true
    tiu?: true
    tkp?: true
    total?: true
    passed?: true
    durationSeconds?: true
    createdAt?: true
  }

  export type TryoutAttemptCountAggregateInputType = {
    id?: true
    userId?: true
    twk?: true
    tiu?: true
    tkp?: true
    total?: true
    passed?: true
    durationSeconds?: true
    answers?: true
    createdAt?: true
    _all?: true
  }

  export type TryoutAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TryoutAttempt to aggregate.
     */
    where?: TryoutAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TryoutAttempts to fetch.
     */
    orderBy?: TryoutAttemptOrderByWithRelationInput | TryoutAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TryoutAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TryoutAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TryoutAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TryoutAttempts
    **/
    _count?: true | TryoutAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TryoutAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TryoutAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TryoutAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TryoutAttemptMaxAggregateInputType
  }

  export type GetTryoutAttemptAggregateType<T extends TryoutAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateTryoutAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTryoutAttempt[P]>
      : GetScalarType<T[P], AggregateTryoutAttempt[P]>
  }




  export type TryoutAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TryoutAttemptWhereInput
    orderBy?: TryoutAttemptOrderByWithAggregationInput | TryoutAttemptOrderByWithAggregationInput[]
    by: TryoutAttemptScalarFieldEnum[] | TryoutAttemptScalarFieldEnum
    having?: TryoutAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TryoutAttemptCountAggregateInputType | true
    _avg?: TryoutAttemptAvgAggregateInputType
    _sum?: TryoutAttemptSumAggregateInputType
    _min?: TryoutAttemptMinAggregateInputType
    _max?: TryoutAttemptMaxAggregateInputType
  }

  export type TryoutAttemptGroupByOutputType = {
    id: string
    userId: string
    twk: number
    tiu: number
    tkp: number
    total: number
    passed: boolean
    durationSeconds: number
    answers: JsonValue | null
    createdAt: Date
    _count: TryoutAttemptCountAggregateOutputType | null
    _avg: TryoutAttemptAvgAggregateOutputType | null
    _sum: TryoutAttemptSumAggregateOutputType | null
    _min: TryoutAttemptMinAggregateOutputType | null
    _max: TryoutAttemptMaxAggregateOutputType | null
  }

  type GetTryoutAttemptGroupByPayload<T extends TryoutAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TryoutAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TryoutAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TryoutAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], TryoutAttemptGroupByOutputType[P]>
        }
      >
    >


  export type TryoutAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    twk?: boolean
    tiu?: boolean
    tkp?: boolean
    total?: boolean
    passed?: boolean
    durationSeconds?: boolean
    answers?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tryoutAttempt"]>

  export type TryoutAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    twk?: boolean
    tiu?: boolean
    tkp?: boolean
    total?: boolean
    passed?: boolean
    durationSeconds?: boolean
    answers?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tryoutAttempt"]>

  export type TryoutAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    twk?: boolean
    tiu?: boolean
    tkp?: boolean
    total?: boolean
    passed?: boolean
    durationSeconds?: boolean
    answers?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tryoutAttempt"]>

  export type TryoutAttemptSelectScalar = {
    id?: boolean
    userId?: boolean
    twk?: boolean
    tiu?: boolean
    tkp?: boolean
    total?: boolean
    passed?: boolean
    durationSeconds?: boolean
    answers?: boolean
    createdAt?: boolean
  }

  export type TryoutAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "twk" | "tiu" | "tkp" | "total" | "passed" | "durationSeconds" | "answers" | "createdAt", ExtArgs["result"]["tryoutAttempt"]>
  export type TryoutAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TryoutAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TryoutAttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TryoutAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TryoutAttempt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      twk: number
      tiu: number
      tkp: number
      total: number
      passed: boolean
      durationSeconds: number
      answers: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["tryoutAttempt"]>
    composites: {}
  }

  type TryoutAttemptGetPayload<S extends boolean | null | undefined | TryoutAttemptDefaultArgs> = $Result.GetResult<Prisma.$TryoutAttemptPayload, S>

  type TryoutAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TryoutAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TryoutAttemptCountAggregateInputType | true
    }

  export interface TryoutAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TryoutAttempt'], meta: { name: 'TryoutAttempt' } }
    /**
     * Find zero or one TryoutAttempt that matches the filter.
     * @param {TryoutAttemptFindUniqueArgs} args - Arguments to find a TryoutAttempt
     * @example
     * // Get one TryoutAttempt
     * const tryoutAttempt = await prisma.tryoutAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TryoutAttemptFindUniqueArgs>(args: SelectSubset<T, TryoutAttemptFindUniqueArgs<ExtArgs>>): Prisma__TryoutAttemptClient<$Result.GetResult<Prisma.$TryoutAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TryoutAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TryoutAttemptFindUniqueOrThrowArgs} args - Arguments to find a TryoutAttempt
     * @example
     * // Get one TryoutAttempt
     * const tryoutAttempt = await prisma.tryoutAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TryoutAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, TryoutAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TryoutAttemptClient<$Result.GetResult<Prisma.$TryoutAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TryoutAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TryoutAttemptFindFirstArgs} args - Arguments to find a TryoutAttempt
     * @example
     * // Get one TryoutAttempt
     * const tryoutAttempt = await prisma.tryoutAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TryoutAttemptFindFirstArgs>(args?: SelectSubset<T, TryoutAttemptFindFirstArgs<ExtArgs>>): Prisma__TryoutAttemptClient<$Result.GetResult<Prisma.$TryoutAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TryoutAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TryoutAttemptFindFirstOrThrowArgs} args - Arguments to find a TryoutAttempt
     * @example
     * // Get one TryoutAttempt
     * const tryoutAttempt = await prisma.tryoutAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TryoutAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, TryoutAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__TryoutAttemptClient<$Result.GetResult<Prisma.$TryoutAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TryoutAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TryoutAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TryoutAttempts
     * const tryoutAttempts = await prisma.tryoutAttempt.findMany()
     * 
     * // Get first 10 TryoutAttempts
     * const tryoutAttempts = await prisma.tryoutAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tryoutAttemptWithIdOnly = await prisma.tryoutAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TryoutAttemptFindManyArgs>(args?: SelectSubset<T, TryoutAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TryoutAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TryoutAttempt.
     * @param {TryoutAttemptCreateArgs} args - Arguments to create a TryoutAttempt.
     * @example
     * // Create one TryoutAttempt
     * const TryoutAttempt = await prisma.tryoutAttempt.create({
     *   data: {
     *     // ... data to create a TryoutAttempt
     *   }
     * })
     * 
     */
    create<T extends TryoutAttemptCreateArgs>(args: SelectSubset<T, TryoutAttemptCreateArgs<ExtArgs>>): Prisma__TryoutAttemptClient<$Result.GetResult<Prisma.$TryoutAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TryoutAttempts.
     * @param {TryoutAttemptCreateManyArgs} args - Arguments to create many TryoutAttempts.
     * @example
     * // Create many TryoutAttempts
     * const tryoutAttempt = await prisma.tryoutAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TryoutAttemptCreateManyArgs>(args?: SelectSubset<T, TryoutAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TryoutAttempts and returns the data saved in the database.
     * @param {TryoutAttemptCreateManyAndReturnArgs} args - Arguments to create many TryoutAttempts.
     * @example
     * // Create many TryoutAttempts
     * const tryoutAttempt = await prisma.tryoutAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TryoutAttempts and only return the `id`
     * const tryoutAttemptWithIdOnly = await prisma.tryoutAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TryoutAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, TryoutAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TryoutAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TryoutAttempt.
     * @param {TryoutAttemptDeleteArgs} args - Arguments to delete one TryoutAttempt.
     * @example
     * // Delete one TryoutAttempt
     * const TryoutAttempt = await prisma.tryoutAttempt.delete({
     *   where: {
     *     // ... filter to delete one TryoutAttempt
     *   }
     * })
     * 
     */
    delete<T extends TryoutAttemptDeleteArgs>(args: SelectSubset<T, TryoutAttemptDeleteArgs<ExtArgs>>): Prisma__TryoutAttemptClient<$Result.GetResult<Prisma.$TryoutAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TryoutAttempt.
     * @param {TryoutAttemptUpdateArgs} args - Arguments to update one TryoutAttempt.
     * @example
     * // Update one TryoutAttempt
     * const tryoutAttempt = await prisma.tryoutAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TryoutAttemptUpdateArgs>(args: SelectSubset<T, TryoutAttemptUpdateArgs<ExtArgs>>): Prisma__TryoutAttemptClient<$Result.GetResult<Prisma.$TryoutAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TryoutAttempts.
     * @param {TryoutAttemptDeleteManyArgs} args - Arguments to filter TryoutAttempts to delete.
     * @example
     * // Delete a few TryoutAttempts
     * const { count } = await prisma.tryoutAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TryoutAttemptDeleteManyArgs>(args?: SelectSubset<T, TryoutAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TryoutAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TryoutAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TryoutAttempts
     * const tryoutAttempt = await prisma.tryoutAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TryoutAttemptUpdateManyArgs>(args: SelectSubset<T, TryoutAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TryoutAttempts and returns the data updated in the database.
     * @param {TryoutAttemptUpdateManyAndReturnArgs} args - Arguments to update many TryoutAttempts.
     * @example
     * // Update many TryoutAttempts
     * const tryoutAttempt = await prisma.tryoutAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TryoutAttempts and only return the `id`
     * const tryoutAttemptWithIdOnly = await prisma.tryoutAttempt.updateManyAndReturn({
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
    updateManyAndReturn<T extends TryoutAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, TryoutAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TryoutAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TryoutAttempt.
     * @param {TryoutAttemptUpsertArgs} args - Arguments to update or create a TryoutAttempt.
     * @example
     * // Update or create a TryoutAttempt
     * const tryoutAttempt = await prisma.tryoutAttempt.upsert({
     *   create: {
     *     // ... data to create a TryoutAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TryoutAttempt we want to update
     *   }
     * })
     */
    upsert<T extends TryoutAttemptUpsertArgs>(args: SelectSubset<T, TryoutAttemptUpsertArgs<ExtArgs>>): Prisma__TryoutAttemptClient<$Result.GetResult<Prisma.$TryoutAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TryoutAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TryoutAttemptCountArgs} args - Arguments to filter TryoutAttempts to count.
     * @example
     * // Count the number of TryoutAttempts
     * const count = await prisma.tryoutAttempt.count({
     *   where: {
     *     // ... the filter for the TryoutAttempts we want to count
     *   }
     * })
    **/
    count<T extends TryoutAttemptCountArgs>(
      args?: Subset<T, TryoutAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TryoutAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TryoutAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TryoutAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TryoutAttemptAggregateArgs>(args: Subset<T, TryoutAttemptAggregateArgs>): Prisma.PrismaPromise<GetTryoutAttemptAggregateType<T>>

    /**
     * Group by TryoutAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TryoutAttemptGroupByArgs} args - Group by arguments.
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
      T extends TryoutAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TryoutAttemptGroupByArgs['orderBy'] }
        : { orderBy?: TryoutAttemptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TryoutAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTryoutAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TryoutAttempt model
   */
  readonly fields: TryoutAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TryoutAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TryoutAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TryoutAttempt model
   */
  interface TryoutAttemptFieldRefs {
    readonly id: FieldRef<"TryoutAttempt", 'String'>
    readonly userId: FieldRef<"TryoutAttempt", 'String'>
    readonly twk: FieldRef<"TryoutAttempt", 'Int'>
    readonly tiu: FieldRef<"TryoutAttempt", 'Int'>
    readonly tkp: FieldRef<"TryoutAttempt", 'Int'>
    readonly total: FieldRef<"TryoutAttempt", 'Int'>
    readonly passed: FieldRef<"TryoutAttempt", 'Boolean'>
    readonly durationSeconds: FieldRef<"TryoutAttempt", 'Int'>
    readonly answers: FieldRef<"TryoutAttempt", 'Json'>
    readonly createdAt: FieldRef<"TryoutAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TryoutAttempt findUnique
   */
  export type TryoutAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TryoutAttempt
     */
    select?: TryoutAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TryoutAttempt
     */
    omit?: TryoutAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TryoutAttemptInclude<ExtArgs> | null
    /**
     * Filter, which TryoutAttempt to fetch.
     */
    where: TryoutAttemptWhereUniqueInput
  }

  /**
   * TryoutAttempt findUniqueOrThrow
   */
  export type TryoutAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TryoutAttempt
     */
    select?: TryoutAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TryoutAttempt
     */
    omit?: TryoutAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TryoutAttemptInclude<ExtArgs> | null
    /**
     * Filter, which TryoutAttempt to fetch.
     */
    where: TryoutAttemptWhereUniqueInput
  }

  /**
   * TryoutAttempt findFirst
   */
  export type TryoutAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TryoutAttempt
     */
    select?: TryoutAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TryoutAttempt
     */
    omit?: TryoutAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TryoutAttemptInclude<ExtArgs> | null
    /**
     * Filter, which TryoutAttempt to fetch.
     */
    where?: TryoutAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TryoutAttempts to fetch.
     */
    orderBy?: TryoutAttemptOrderByWithRelationInput | TryoutAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TryoutAttempts.
     */
    cursor?: TryoutAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TryoutAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TryoutAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TryoutAttempts.
     */
    distinct?: TryoutAttemptScalarFieldEnum | TryoutAttemptScalarFieldEnum[]
  }

  /**
   * TryoutAttempt findFirstOrThrow
   */
  export type TryoutAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TryoutAttempt
     */
    select?: TryoutAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TryoutAttempt
     */
    omit?: TryoutAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TryoutAttemptInclude<ExtArgs> | null
    /**
     * Filter, which TryoutAttempt to fetch.
     */
    where?: TryoutAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TryoutAttempts to fetch.
     */
    orderBy?: TryoutAttemptOrderByWithRelationInput | TryoutAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TryoutAttempts.
     */
    cursor?: TryoutAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TryoutAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TryoutAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TryoutAttempts.
     */
    distinct?: TryoutAttemptScalarFieldEnum | TryoutAttemptScalarFieldEnum[]
  }

  /**
   * TryoutAttempt findMany
   */
  export type TryoutAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TryoutAttempt
     */
    select?: TryoutAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TryoutAttempt
     */
    omit?: TryoutAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TryoutAttemptInclude<ExtArgs> | null
    /**
     * Filter, which TryoutAttempts to fetch.
     */
    where?: TryoutAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TryoutAttempts to fetch.
     */
    orderBy?: TryoutAttemptOrderByWithRelationInput | TryoutAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TryoutAttempts.
     */
    cursor?: TryoutAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TryoutAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TryoutAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TryoutAttempts.
     */
    distinct?: TryoutAttemptScalarFieldEnum | TryoutAttemptScalarFieldEnum[]
  }

  /**
   * TryoutAttempt create
   */
  export type TryoutAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TryoutAttempt
     */
    select?: TryoutAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TryoutAttempt
     */
    omit?: TryoutAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TryoutAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a TryoutAttempt.
     */
    data: XOR<TryoutAttemptCreateInput, TryoutAttemptUncheckedCreateInput>
  }

  /**
   * TryoutAttempt createMany
   */
  export type TryoutAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TryoutAttempts.
     */
    data: TryoutAttemptCreateManyInput | TryoutAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TryoutAttempt createManyAndReturn
   */
  export type TryoutAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TryoutAttempt
     */
    select?: TryoutAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TryoutAttempt
     */
    omit?: TryoutAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many TryoutAttempts.
     */
    data: TryoutAttemptCreateManyInput | TryoutAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TryoutAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TryoutAttempt update
   */
  export type TryoutAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TryoutAttempt
     */
    select?: TryoutAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TryoutAttempt
     */
    omit?: TryoutAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TryoutAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a TryoutAttempt.
     */
    data: XOR<TryoutAttemptUpdateInput, TryoutAttemptUncheckedUpdateInput>
    /**
     * Choose, which TryoutAttempt to update.
     */
    where: TryoutAttemptWhereUniqueInput
  }

  /**
   * TryoutAttempt updateMany
   */
  export type TryoutAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TryoutAttempts.
     */
    data: XOR<TryoutAttemptUpdateManyMutationInput, TryoutAttemptUncheckedUpdateManyInput>
    /**
     * Filter which TryoutAttempts to update
     */
    where?: TryoutAttemptWhereInput
    /**
     * Limit how many TryoutAttempts to update.
     */
    limit?: number
  }

  /**
   * TryoutAttempt updateManyAndReturn
   */
  export type TryoutAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TryoutAttempt
     */
    select?: TryoutAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TryoutAttempt
     */
    omit?: TryoutAttemptOmit<ExtArgs> | null
    /**
     * The data used to update TryoutAttempts.
     */
    data: XOR<TryoutAttemptUpdateManyMutationInput, TryoutAttemptUncheckedUpdateManyInput>
    /**
     * Filter which TryoutAttempts to update
     */
    where?: TryoutAttemptWhereInput
    /**
     * Limit how many TryoutAttempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TryoutAttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TryoutAttempt upsert
   */
  export type TryoutAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TryoutAttempt
     */
    select?: TryoutAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TryoutAttempt
     */
    omit?: TryoutAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TryoutAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the TryoutAttempt to update in case it exists.
     */
    where: TryoutAttemptWhereUniqueInput
    /**
     * In case the TryoutAttempt found by the `where` argument doesn't exist, create a new TryoutAttempt with this data.
     */
    create: XOR<TryoutAttemptCreateInput, TryoutAttemptUncheckedCreateInput>
    /**
     * In case the TryoutAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TryoutAttemptUpdateInput, TryoutAttemptUncheckedUpdateInput>
  }

  /**
   * TryoutAttempt delete
   */
  export type TryoutAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TryoutAttempt
     */
    select?: TryoutAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TryoutAttempt
     */
    omit?: TryoutAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TryoutAttemptInclude<ExtArgs> | null
    /**
     * Filter which TryoutAttempt to delete.
     */
    where: TryoutAttemptWhereUniqueInput
  }

  /**
   * TryoutAttempt deleteMany
   */
  export type TryoutAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TryoutAttempts to delete
     */
    where?: TryoutAttemptWhereInput
    /**
     * Limit how many TryoutAttempts to delete.
     */
    limit?: number
  }

  /**
   * TryoutAttempt without action
   */
  export type TryoutAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TryoutAttempt
     */
    select?: TryoutAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TryoutAttempt
     */
    omit?: TryoutAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TryoutAttemptInclude<ExtArgs> | null
  }


  /**
   * Model ChecklistProgress
   */

  export type AggregateChecklistProgress = {
    _count: ChecklistProgressCountAggregateOutputType | null
    _min: ChecklistProgressMinAggregateOutputType | null
    _max: ChecklistProgressMaxAggregateOutputType | null
  }

  export type ChecklistProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    itemId: string | null
    checked: boolean | null
    updatedAt: Date | null
  }

  export type ChecklistProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    itemId: string | null
    checked: boolean | null
    updatedAt: Date | null
  }

  export type ChecklistProgressCountAggregateOutputType = {
    id: number
    userId: number
    itemId: number
    checked: number
    updatedAt: number
    _all: number
  }


  export type ChecklistProgressMinAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    checked?: true
    updatedAt?: true
  }

  export type ChecklistProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    checked?: true
    updatedAt?: true
  }

  export type ChecklistProgressCountAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    checked?: true
    updatedAt?: true
    _all?: true
  }

  export type ChecklistProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChecklistProgress to aggregate.
     */
    where?: ChecklistProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistProgresses to fetch.
     */
    orderBy?: ChecklistProgressOrderByWithRelationInput | ChecklistProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChecklistProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChecklistProgresses
    **/
    _count?: true | ChecklistProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChecklistProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChecklistProgressMaxAggregateInputType
  }

  export type GetChecklistProgressAggregateType<T extends ChecklistProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateChecklistProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChecklistProgress[P]>
      : GetScalarType<T[P], AggregateChecklistProgress[P]>
  }




  export type ChecklistProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistProgressWhereInput
    orderBy?: ChecklistProgressOrderByWithAggregationInput | ChecklistProgressOrderByWithAggregationInput[]
    by: ChecklistProgressScalarFieldEnum[] | ChecklistProgressScalarFieldEnum
    having?: ChecklistProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChecklistProgressCountAggregateInputType | true
    _min?: ChecklistProgressMinAggregateInputType
    _max?: ChecklistProgressMaxAggregateInputType
  }

  export type ChecklistProgressGroupByOutputType = {
    id: string
    userId: string
    itemId: string
    checked: boolean
    updatedAt: Date
    _count: ChecklistProgressCountAggregateOutputType | null
    _min: ChecklistProgressMinAggregateOutputType | null
    _max: ChecklistProgressMaxAggregateOutputType | null
  }

  type GetChecklistProgressGroupByPayload<T extends ChecklistProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChecklistProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChecklistProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChecklistProgressGroupByOutputType[P]>
            : GetScalarType<T[P], ChecklistProgressGroupByOutputType[P]>
        }
      >
    >


  export type ChecklistProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemId?: boolean
    checked?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklistProgress"]>

  export type ChecklistProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemId?: boolean
    checked?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklistProgress"]>

  export type ChecklistProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemId?: boolean
    checked?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklistProgress"]>

  export type ChecklistProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    itemId?: boolean
    checked?: boolean
    updatedAt?: boolean
  }

  export type ChecklistProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "itemId" | "checked" | "updatedAt", ExtArgs["result"]["checklistProgress"]>
  export type ChecklistProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChecklistProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChecklistProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChecklistProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChecklistProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      itemId: string
      checked: boolean
      updatedAt: Date
    }, ExtArgs["result"]["checklistProgress"]>
    composites: {}
  }

  type ChecklistProgressGetPayload<S extends boolean | null | undefined | ChecklistProgressDefaultArgs> = $Result.GetResult<Prisma.$ChecklistProgressPayload, S>

  type ChecklistProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChecklistProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChecklistProgressCountAggregateInputType | true
    }

  export interface ChecklistProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChecklistProgress'], meta: { name: 'ChecklistProgress' } }
    /**
     * Find zero or one ChecklistProgress that matches the filter.
     * @param {ChecklistProgressFindUniqueArgs} args - Arguments to find a ChecklistProgress
     * @example
     * // Get one ChecklistProgress
     * const checklistProgress = await prisma.checklistProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChecklistProgressFindUniqueArgs>(args: SelectSubset<T, ChecklistProgressFindUniqueArgs<ExtArgs>>): Prisma__ChecklistProgressClient<$Result.GetResult<Prisma.$ChecklistProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChecklistProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChecklistProgressFindUniqueOrThrowArgs} args - Arguments to find a ChecklistProgress
     * @example
     * // Get one ChecklistProgress
     * const checklistProgress = await prisma.checklistProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChecklistProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, ChecklistProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChecklistProgressClient<$Result.GetResult<Prisma.$ChecklistProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChecklistProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistProgressFindFirstArgs} args - Arguments to find a ChecklistProgress
     * @example
     * // Get one ChecklistProgress
     * const checklistProgress = await prisma.checklistProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChecklistProgressFindFirstArgs>(args?: SelectSubset<T, ChecklistProgressFindFirstArgs<ExtArgs>>): Prisma__ChecklistProgressClient<$Result.GetResult<Prisma.$ChecklistProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChecklistProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistProgressFindFirstOrThrowArgs} args - Arguments to find a ChecklistProgress
     * @example
     * // Get one ChecklistProgress
     * const checklistProgress = await prisma.checklistProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChecklistProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, ChecklistProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChecklistProgressClient<$Result.GetResult<Prisma.$ChecklistProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChecklistProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChecklistProgresses
     * const checklistProgresses = await prisma.checklistProgress.findMany()
     * 
     * // Get first 10 ChecklistProgresses
     * const checklistProgresses = await prisma.checklistProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checklistProgressWithIdOnly = await prisma.checklistProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChecklistProgressFindManyArgs>(args?: SelectSubset<T, ChecklistProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChecklistProgress.
     * @param {ChecklistProgressCreateArgs} args - Arguments to create a ChecklistProgress.
     * @example
     * // Create one ChecklistProgress
     * const ChecklistProgress = await prisma.checklistProgress.create({
     *   data: {
     *     // ... data to create a ChecklistProgress
     *   }
     * })
     * 
     */
    create<T extends ChecklistProgressCreateArgs>(args: SelectSubset<T, ChecklistProgressCreateArgs<ExtArgs>>): Prisma__ChecklistProgressClient<$Result.GetResult<Prisma.$ChecklistProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChecklistProgresses.
     * @param {ChecklistProgressCreateManyArgs} args - Arguments to create many ChecklistProgresses.
     * @example
     * // Create many ChecklistProgresses
     * const checklistProgress = await prisma.checklistProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChecklistProgressCreateManyArgs>(args?: SelectSubset<T, ChecklistProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChecklistProgresses and returns the data saved in the database.
     * @param {ChecklistProgressCreateManyAndReturnArgs} args - Arguments to create many ChecklistProgresses.
     * @example
     * // Create many ChecklistProgresses
     * const checklistProgress = await prisma.checklistProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChecklistProgresses and only return the `id`
     * const checklistProgressWithIdOnly = await prisma.checklistProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChecklistProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, ChecklistProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChecklistProgress.
     * @param {ChecklistProgressDeleteArgs} args - Arguments to delete one ChecklistProgress.
     * @example
     * // Delete one ChecklistProgress
     * const ChecklistProgress = await prisma.checklistProgress.delete({
     *   where: {
     *     // ... filter to delete one ChecklistProgress
     *   }
     * })
     * 
     */
    delete<T extends ChecklistProgressDeleteArgs>(args: SelectSubset<T, ChecklistProgressDeleteArgs<ExtArgs>>): Prisma__ChecklistProgressClient<$Result.GetResult<Prisma.$ChecklistProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChecklistProgress.
     * @param {ChecklistProgressUpdateArgs} args - Arguments to update one ChecklistProgress.
     * @example
     * // Update one ChecklistProgress
     * const checklistProgress = await prisma.checklistProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChecklistProgressUpdateArgs>(args: SelectSubset<T, ChecklistProgressUpdateArgs<ExtArgs>>): Prisma__ChecklistProgressClient<$Result.GetResult<Prisma.$ChecklistProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChecklistProgresses.
     * @param {ChecklistProgressDeleteManyArgs} args - Arguments to filter ChecklistProgresses to delete.
     * @example
     * // Delete a few ChecklistProgresses
     * const { count } = await prisma.checklistProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChecklistProgressDeleteManyArgs>(args?: SelectSubset<T, ChecklistProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChecklistProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChecklistProgresses
     * const checklistProgress = await prisma.checklistProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChecklistProgressUpdateManyArgs>(args: SelectSubset<T, ChecklistProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChecklistProgresses and returns the data updated in the database.
     * @param {ChecklistProgressUpdateManyAndReturnArgs} args - Arguments to update many ChecklistProgresses.
     * @example
     * // Update many ChecklistProgresses
     * const checklistProgress = await prisma.checklistProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChecklistProgresses and only return the `id`
     * const checklistProgressWithIdOnly = await prisma.checklistProgress.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChecklistProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, ChecklistProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChecklistProgress.
     * @param {ChecklistProgressUpsertArgs} args - Arguments to update or create a ChecklistProgress.
     * @example
     * // Update or create a ChecklistProgress
     * const checklistProgress = await prisma.checklistProgress.upsert({
     *   create: {
     *     // ... data to create a ChecklistProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChecklistProgress we want to update
     *   }
     * })
     */
    upsert<T extends ChecklistProgressUpsertArgs>(args: SelectSubset<T, ChecklistProgressUpsertArgs<ExtArgs>>): Prisma__ChecklistProgressClient<$Result.GetResult<Prisma.$ChecklistProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChecklistProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistProgressCountArgs} args - Arguments to filter ChecklistProgresses to count.
     * @example
     * // Count the number of ChecklistProgresses
     * const count = await prisma.checklistProgress.count({
     *   where: {
     *     // ... the filter for the ChecklistProgresses we want to count
     *   }
     * })
    **/
    count<T extends ChecklistProgressCountArgs>(
      args?: Subset<T, ChecklistProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChecklistProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChecklistProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChecklistProgressAggregateArgs>(args: Subset<T, ChecklistProgressAggregateArgs>): Prisma.PrismaPromise<GetChecklistProgressAggregateType<T>>

    /**
     * Group by ChecklistProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistProgressGroupByArgs} args - Group by arguments.
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
      T extends ChecklistProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChecklistProgressGroupByArgs['orderBy'] }
        : { orderBy?: ChecklistProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChecklistProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChecklistProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChecklistProgress model
   */
  readonly fields: ChecklistProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChecklistProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChecklistProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChecklistProgress model
   */
  interface ChecklistProgressFieldRefs {
    readonly id: FieldRef<"ChecklistProgress", 'String'>
    readonly userId: FieldRef<"ChecklistProgress", 'String'>
    readonly itemId: FieldRef<"ChecklistProgress", 'String'>
    readonly checked: FieldRef<"ChecklistProgress", 'Boolean'>
    readonly updatedAt: FieldRef<"ChecklistProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChecklistProgress findUnique
   */
  export type ChecklistProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistProgress
     */
    select?: ChecklistProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistProgress
     */
    omit?: ChecklistProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistProgressInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistProgress to fetch.
     */
    where: ChecklistProgressWhereUniqueInput
  }

  /**
   * ChecklistProgress findUniqueOrThrow
   */
  export type ChecklistProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistProgress
     */
    select?: ChecklistProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistProgress
     */
    omit?: ChecklistProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistProgressInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistProgress to fetch.
     */
    where: ChecklistProgressWhereUniqueInput
  }

  /**
   * ChecklistProgress findFirst
   */
  export type ChecklistProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistProgress
     */
    select?: ChecklistProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistProgress
     */
    omit?: ChecklistProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistProgressInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistProgress to fetch.
     */
    where?: ChecklistProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistProgresses to fetch.
     */
    orderBy?: ChecklistProgressOrderByWithRelationInput | ChecklistProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChecklistProgresses.
     */
    cursor?: ChecklistProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChecklistProgresses.
     */
    distinct?: ChecklistProgressScalarFieldEnum | ChecklistProgressScalarFieldEnum[]
  }

  /**
   * ChecklistProgress findFirstOrThrow
   */
  export type ChecklistProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistProgress
     */
    select?: ChecklistProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistProgress
     */
    omit?: ChecklistProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistProgressInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistProgress to fetch.
     */
    where?: ChecklistProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistProgresses to fetch.
     */
    orderBy?: ChecklistProgressOrderByWithRelationInput | ChecklistProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChecklistProgresses.
     */
    cursor?: ChecklistProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChecklistProgresses.
     */
    distinct?: ChecklistProgressScalarFieldEnum | ChecklistProgressScalarFieldEnum[]
  }

  /**
   * ChecklistProgress findMany
   */
  export type ChecklistProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistProgress
     */
    select?: ChecklistProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistProgress
     */
    omit?: ChecklistProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistProgressInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistProgresses to fetch.
     */
    where?: ChecklistProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistProgresses to fetch.
     */
    orderBy?: ChecklistProgressOrderByWithRelationInput | ChecklistProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChecklistProgresses.
     */
    cursor?: ChecklistProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChecklistProgresses.
     */
    distinct?: ChecklistProgressScalarFieldEnum | ChecklistProgressScalarFieldEnum[]
  }

  /**
   * ChecklistProgress create
   */
  export type ChecklistProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistProgress
     */
    select?: ChecklistProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistProgress
     */
    omit?: ChecklistProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a ChecklistProgress.
     */
    data: XOR<ChecklistProgressCreateInput, ChecklistProgressUncheckedCreateInput>
  }

  /**
   * ChecklistProgress createMany
   */
  export type ChecklistProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChecklistProgresses.
     */
    data: ChecklistProgressCreateManyInput | ChecklistProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChecklistProgress createManyAndReturn
   */
  export type ChecklistProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistProgress
     */
    select?: ChecklistProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistProgress
     */
    omit?: ChecklistProgressOmit<ExtArgs> | null
    /**
     * The data used to create many ChecklistProgresses.
     */
    data: ChecklistProgressCreateManyInput | ChecklistProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChecklistProgress update
   */
  export type ChecklistProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistProgress
     */
    select?: ChecklistProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistProgress
     */
    omit?: ChecklistProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a ChecklistProgress.
     */
    data: XOR<ChecklistProgressUpdateInput, ChecklistProgressUncheckedUpdateInput>
    /**
     * Choose, which ChecklistProgress to update.
     */
    where: ChecklistProgressWhereUniqueInput
  }

  /**
   * ChecklistProgress updateMany
   */
  export type ChecklistProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChecklistProgresses.
     */
    data: XOR<ChecklistProgressUpdateManyMutationInput, ChecklistProgressUncheckedUpdateManyInput>
    /**
     * Filter which ChecklistProgresses to update
     */
    where?: ChecklistProgressWhereInput
    /**
     * Limit how many ChecklistProgresses to update.
     */
    limit?: number
  }

  /**
   * ChecklistProgress updateManyAndReturn
   */
  export type ChecklistProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistProgress
     */
    select?: ChecklistProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistProgress
     */
    omit?: ChecklistProgressOmit<ExtArgs> | null
    /**
     * The data used to update ChecklistProgresses.
     */
    data: XOR<ChecklistProgressUpdateManyMutationInput, ChecklistProgressUncheckedUpdateManyInput>
    /**
     * Filter which ChecklistProgresses to update
     */
    where?: ChecklistProgressWhereInput
    /**
     * Limit how many ChecklistProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChecklistProgress upsert
   */
  export type ChecklistProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistProgress
     */
    select?: ChecklistProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistProgress
     */
    omit?: ChecklistProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the ChecklistProgress to update in case it exists.
     */
    where: ChecklistProgressWhereUniqueInput
    /**
     * In case the ChecklistProgress found by the `where` argument doesn't exist, create a new ChecklistProgress with this data.
     */
    create: XOR<ChecklistProgressCreateInput, ChecklistProgressUncheckedCreateInput>
    /**
     * In case the ChecklistProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChecklistProgressUpdateInput, ChecklistProgressUncheckedUpdateInput>
  }

  /**
   * ChecklistProgress delete
   */
  export type ChecklistProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistProgress
     */
    select?: ChecklistProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistProgress
     */
    omit?: ChecklistProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistProgressInclude<ExtArgs> | null
    /**
     * Filter which ChecklistProgress to delete.
     */
    where: ChecklistProgressWhereUniqueInput
  }

  /**
   * ChecklistProgress deleteMany
   */
  export type ChecklistProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChecklistProgresses to delete
     */
    where?: ChecklistProgressWhereInput
    /**
     * Limit how many ChecklistProgresses to delete.
     */
    limit?: number
  }

  /**
   * ChecklistProgress without action
   */
  export type ChecklistProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistProgress
     */
    select?: ChecklistProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistProgress
     */
    omit?: ChecklistProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistProgressInclude<ExtArgs> | null
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
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    banned: 'banned',
    banReason: 'banReason',
    banExpires: 'banExpires'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    tokenType: 'tokenType',
    scope: 'scope',
    idToken: 'idToken',
    sessionState: 'sessionState',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    accountId: 'accountId',
    providerId: 'providerId',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    password: 'password'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const CredentialScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    providerId: 'providerId',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CredentialScalarFieldEnum = (typeof CredentialScalarFieldEnum)[keyof typeof CredentialScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresAt: 'expiresAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    token: 'token',
    impersonatedBy: 'impersonatedBy'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const MaterialProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    materialSlug: 'materialSlug',
    done: 'done',
    completedAt: 'completedAt'
  };

  export type MaterialProgressScalarFieldEnum = (typeof MaterialProgressScalarFieldEnum)[keyof typeof MaterialProgressScalarFieldEnum]


  export const QuizBestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    materialSlug: 'materialSlug',
    bestScore: 'bestScore',
    totalQuestions: 'totalQuestions',
    updatedAt: 'updatedAt'
  };

  export type QuizBestScalarFieldEnum = (typeof QuizBestScalarFieldEnum)[keyof typeof QuizBestScalarFieldEnum]


  export const TryoutAttemptScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    twk: 'twk',
    tiu: 'tiu',
    tkp: 'tkp',
    total: 'total',
    passed: 'passed',
    durationSeconds: 'durationSeconds',
    answers: 'answers',
    createdAt: 'createdAt'
  };

  export type TryoutAttemptScalarFieldEnum = (typeof TryoutAttemptScalarFieldEnum)[keyof typeof TryoutAttemptScalarFieldEnum]


  export const ChecklistProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    itemId: 'itemId',
    checked: 'checked',
    updatedAt: 'updatedAt'
  };

  export type ChecklistProgressScalarFieldEnum = (typeof ChecklistProgressScalarFieldEnum)[keyof typeof ChecklistProgressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: StringNullableFilter<"User"> | string | null
    banned?: BoolNullableFilter<"User"> | boolean | null
    banReason?: StringNullableFilter<"User"> | string | null
    banExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    accounts?: AccountListRelationFilter
    credentials?: CredentialListRelationFilter
    sessions?: SessionListRelationFilter
    materialProgress?: MaterialProgressListRelationFilter
    quizBest?: QuizBestListRelationFilter
    tryoutAttempts?: TryoutAttemptListRelationFilter
    checklistProgress?: ChecklistProgressListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    credentials?: CredentialOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    materialProgress?: MaterialProgressOrderByRelationAggregateInput
    quizBest?: QuizBestOrderByRelationAggregateInput
    tryoutAttempts?: TryoutAttemptOrderByRelationAggregateInput
    checklistProgress?: ChecklistProgressOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: StringNullableFilter<"User"> | string | null
    banned?: BoolNullableFilter<"User"> | boolean | null
    banReason?: StringNullableFilter<"User"> | string | null
    banExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    accounts?: AccountListRelationFilter
    credentials?: CredentialListRelationFilter
    sessions?: SessionListRelationFilter
    materialProgress?: MaterialProgressListRelationFilter
    quizBest?: QuizBestListRelationFilter
    tryoutAttempts?: TryoutAttemptListRelationFilter
    checklistProgress?: ChecklistProgressListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
    banned?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    banReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    banExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    provider?: StringNullableFilter<"Account"> | string | null
    providerAccountId?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    tokenType?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    sessionState?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    password?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrderInput | SortOrder
    providerAccountId?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    tokenType?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    sessionState?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    provider?: StringNullableFilter<"Account"> | string | null
    providerAccountId?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    tokenType?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    sessionState?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    password?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrderInput | SortOrder
    providerAccountId?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    tokenType?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    sessionState?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringNullableWithAggregatesFilter<"Account"> | string | null
    providerAccountId?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    tokenType?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    sessionState?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type CredentialWhereInput = {
    AND?: CredentialWhereInput | CredentialWhereInput[]
    OR?: CredentialWhereInput[]
    NOT?: CredentialWhereInput | CredentialWhereInput[]
    id?: StringFilter<"Credential"> | string
    userId?: StringFilter<"Credential"> | string
    provider?: StringFilter<"Credential"> | string
    providerId?: StringFilter<"Credential"> | string
    password?: StringFilter<"Credential"> | string
    createdAt?: DateTimeFilter<"Credential"> | Date | string
    updatedAt?: DateTimeFilter<"Credential"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CredentialOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CredentialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerId?: CredentialProviderProviderIdCompoundUniqueInput
    AND?: CredentialWhereInput | CredentialWhereInput[]
    OR?: CredentialWhereInput[]
    NOT?: CredentialWhereInput | CredentialWhereInput[]
    userId?: StringFilter<"Credential"> | string
    provider?: StringFilter<"Credential"> | string
    providerId?: StringFilter<"Credential"> | string
    password?: StringFilter<"Credential"> | string
    createdAt?: DateTimeFilter<"Credential"> | Date | string
    updatedAt?: DateTimeFilter<"Credential"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerId">

  export type CredentialOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CredentialCountOrderByAggregateInput
    _max?: CredentialMaxOrderByAggregateInput
    _min?: CredentialMinOrderByAggregateInput
  }

  export type CredentialScalarWhereWithAggregatesInput = {
    AND?: CredentialScalarWhereWithAggregatesInput | CredentialScalarWhereWithAggregatesInput[]
    OR?: CredentialScalarWhereWithAggregatesInput[]
    NOT?: CredentialScalarWhereWithAggregatesInput | CredentialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Credential"> | string
    userId?: StringWithAggregatesFilter<"Credential"> | string
    provider?: StringWithAggregatesFilter<"Credential"> | string
    providerId?: StringWithAggregatesFilter<"Credential"> | string
    password?: StringWithAggregatesFilter<"Credential"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Credential"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Credential"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
    impersonatedBy?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
    impersonatedBy?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    impersonatedBy?: StringNullableWithAggregatesFilter<"Session"> | string | null
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type MaterialProgressWhereInput = {
    AND?: MaterialProgressWhereInput | MaterialProgressWhereInput[]
    OR?: MaterialProgressWhereInput[]
    NOT?: MaterialProgressWhereInput | MaterialProgressWhereInput[]
    id?: StringFilter<"MaterialProgress"> | string
    userId?: StringFilter<"MaterialProgress"> | string
    materialSlug?: StringFilter<"MaterialProgress"> | string
    done?: BoolFilter<"MaterialProgress"> | boolean
    completedAt?: DateTimeFilter<"MaterialProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MaterialProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    materialSlug?: SortOrder
    done?: SortOrder
    completedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MaterialProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_materialSlug?: MaterialProgressUserIdMaterialSlugCompoundUniqueInput
    AND?: MaterialProgressWhereInput | MaterialProgressWhereInput[]
    OR?: MaterialProgressWhereInput[]
    NOT?: MaterialProgressWhereInput | MaterialProgressWhereInput[]
    userId?: StringFilter<"MaterialProgress"> | string
    materialSlug?: StringFilter<"MaterialProgress"> | string
    done?: BoolFilter<"MaterialProgress"> | boolean
    completedAt?: DateTimeFilter<"MaterialProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_materialSlug">

  export type MaterialProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    materialSlug?: SortOrder
    done?: SortOrder
    completedAt?: SortOrder
    _count?: MaterialProgressCountOrderByAggregateInput
    _max?: MaterialProgressMaxOrderByAggregateInput
    _min?: MaterialProgressMinOrderByAggregateInput
  }

  export type MaterialProgressScalarWhereWithAggregatesInput = {
    AND?: MaterialProgressScalarWhereWithAggregatesInput | MaterialProgressScalarWhereWithAggregatesInput[]
    OR?: MaterialProgressScalarWhereWithAggregatesInput[]
    NOT?: MaterialProgressScalarWhereWithAggregatesInput | MaterialProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaterialProgress"> | string
    userId?: StringWithAggregatesFilter<"MaterialProgress"> | string
    materialSlug?: StringWithAggregatesFilter<"MaterialProgress"> | string
    done?: BoolWithAggregatesFilter<"MaterialProgress"> | boolean
    completedAt?: DateTimeWithAggregatesFilter<"MaterialProgress"> | Date | string
  }

  export type QuizBestWhereInput = {
    AND?: QuizBestWhereInput | QuizBestWhereInput[]
    OR?: QuizBestWhereInput[]
    NOT?: QuizBestWhereInput | QuizBestWhereInput[]
    id?: StringFilter<"QuizBest"> | string
    userId?: StringFilter<"QuizBest"> | string
    materialSlug?: StringFilter<"QuizBest"> | string
    bestScore?: IntFilter<"QuizBest"> | number
    totalQuestions?: IntFilter<"QuizBest"> | number
    updatedAt?: DateTimeFilter<"QuizBest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type QuizBestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    materialSlug?: SortOrder
    bestScore?: SortOrder
    totalQuestions?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type QuizBestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_materialSlug?: QuizBestUserIdMaterialSlugCompoundUniqueInput
    AND?: QuizBestWhereInput | QuizBestWhereInput[]
    OR?: QuizBestWhereInput[]
    NOT?: QuizBestWhereInput | QuizBestWhereInput[]
    userId?: StringFilter<"QuizBest"> | string
    materialSlug?: StringFilter<"QuizBest"> | string
    bestScore?: IntFilter<"QuizBest"> | number
    totalQuestions?: IntFilter<"QuizBest"> | number
    updatedAt?: DateTimeFilter<"QuizBest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_materialSlug">

  export type QuizBestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    materialSlug?: SortOrder
    bestScore?: SortOrder
    totalQuestions?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizBestCountOrderByAggregateInput
    _avg?: QuizBestAvgOrderByAggregateInput
    _max?: QuizBestMaxOrderByAggregateInput
    _min?: QuizBestMinOrderByAggregateInput
    _sum?: QuizBestSumOrderByAggregateInput
  }

  export type QuizBestScalarWhereWithAggregatesInput = {
    AND?: QuizBestScalarWhereWithAggregatesInput | QuizBestScalarWhereWithAggregatesInput[]
    OR?: QuizBestScalarWhereWithAggregatesInput[]
    NOT?: QuizBestScalarWhereWithAggregatesInput | QuizBestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizBest"> | string
    userId?: StringWithAggregatesFilter<"QuizBest"> | string
    materialSlug?: StringWithAggregatesFilter<"QuizBest"> | string
    bestScore?: IntWithAggregatesFilter<"QuizBest"> | number
    totalQuestions?: IntWithAggregatesFilter<"QuizBest"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"QuizBest"> | Date | string
  }

  export type TryoutAttemptWhereInput = {
    AND?: TryoutAttemptWhereInput | TryoutAttemptWhereInput[]
    OR?: TryoutAttemptWhereInput[]
    NOT?: TryoutAttemptWhereInput | TryoutAttemptWhereInput[]
    id?: StringFilter<"TryoutAttempt"> | string
    userId?: StringFilter<"TryoutAttempt"> | string
    twk?: IntFilter<"TryoutAttempt"> | number
    tiu?: IntFilter<"TryoutAttempt"> | number
    tkp?: IntFilter<"TryoutAttempt"> | number
    total?: IntFilter<"TryoutAttempt"> | number
    passed?: BoolFilter<"TryoutAttempt"> | boolean
    durationSeconds?: IntFilter<"TryoutAttempt"> | number
    answers?: JsonNullableFilter<"TryoutAttempt">
    createdAt?: DateTimeFilter<"TryoutAttempt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TryoutAttemptOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    twk?: SortOrder
    tiu?: SortOrder
    tkp?: SortOrder
    total?: SortOrder
    passed?: SortOrder
    durationSeconds?: SortOrder
    answers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TryoutAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TryoutAttemptWhereInput | TryoutAttemptWhereInput[]
    OR?: TryoutAttemptWhereInput[]
    NOT?: TryoutAttemptWhereInput | TryoutAttemptWhereInput[]
    userId?: StringFilter<"TryoutAttempt"> | string
    twk?: IntFilter<"TryoutAttempt"> | number
    tiu?: IntFilter<"TryoutAttempt"> | number
    tkp?: IntFilter<"TryoutAttempt"> | number
    total?: IntFilter<"TryoutAttempt"> | number
    passed?: BoolFilter<"TryoutAttempt"> | boolean
    durationSeconds?: IntFilter<"TryoutAttempt"> | number
    answers?: JsonNullableFilter<"TryoutAttempt">
    createdAt?: DateTimeFilter<"TryoutAttempt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TryoutAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    twk?: SortOrder
    tiu?: SortOrder
    tkp?: SortOrder
    total?: SortOrder
    passed?: SortOrder
    durationSeconds?: SortOrder
    answers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TryoutAttemptCountOrderByAggregateInput
    _avg?: TryoutAttemptAvgOrderByAggregateInput
    _max?: TryoutAttemptMaxOrderByAggregateInput
    _min?: TryoutAttemptMinOrderByAggregateInput
    _sum?: TryoutAttemptSumOrderByAggregateInput
  }

  export type TryoutAttemptScalarWhereWithAggregatesInput = {
    AND?: TryoutAttemptScalarWhereWithAggregatesInput | TryoutAttemptScalarWhereWithAggregatesInput[]
    OR?: TryoutAttemptScalarWhereWithAggregatesInput[]
    NOT?: TryoutAttemptScalarWhereWithAggregatesInput | TryoutAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TryoutAttempt"> | string
    userId?: StringWithAggregatesFilter<"TryoutAttempt"> | string
    twk?: IntWithAggregatesFilter<"TryoutAttempt"> | number
    tiu?: IntWithAggregatesFilter<"TryoutAttempt"> | number
    tkp?: IntWithAggregatesFilter<"TryoutAttempt"> | number
    total?: IntWithAggregatesFilter<"TryoutAttempt"> | number
    passed?: BoolWithAggregatesFilter<"TryoutAttempt"> | boolean
    durationSeconds?: IntWithAggregatesFilter<"TryoutAttempt"> | number
    answers?: JsonNullableWithAggregatesFilter<"TryoutAttempt">
    createdAt?: DateTimeWithAggregatesFilter<"TryoutAttempt"> | Date | string
  }

  export type ChecklistProgressWhereInput = {
    AND?: ChecklistProgressWhereInput | ChecklistProgressWhereInput[]
    OR?: ChecklistProgressWhereInput[]
    NOT?: ChecklistProgressWhereInput | ChecklistProgressWhereInput[]
    id?: StringFilter<"ChecklistProgress"> | string
    userId?: StringFilter<"ChecklistProgress"> | string
    itemId?: StringFilter<"ChecklistProgress"> | string
    checked?: BoolFilter<"ChecklistProgress"> | boolean
    updatedAt?: DateTimeFilter<"ChecklistProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChecklistProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    checked?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ChecklistProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_itemId?: ChecklistProgressUserIdItemIdCompoundUniqueInput
    AND?: ChecklistProgressWhereInput | ChecklistProgressWhereInput[]
    OR?: ChecklistProgressWhereInput[]
    NOT?: ChecklistProgressWhereInput | ChecklistProgressWhereInput[]
    userId?: StringFilter<"ChecklistProgress"> | string
    itemId?: StringFilter<"ChecklistProgress"> | string
    checked?: BoolFilter<"ChecklistProgress"> | boolean
    updatedAt?: DateTimeFilter<"ChecklistProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_itemId">

  export type ChecklistProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    checked?: SortOrder
    updatedAt?: SortOrder
    _count?: ChecklistProgressCountOrderByAggregateInput
    _max?: ChecklistProgressMaxOrderByAggregateInput
    _min?: ChecklistProgressMinOrderByAggregateInput
  }

  export type ChecklistProgressScalarWhereWithAggregatesInput = {
    AND?: ChecklistProgressScalarWhereWithAggregatesInput | ChecklistProgressScalarWhereWithAggregatesInput[]
    OR?: ChecklistProgressScalarWhereWithAggregatesInput[]
    NOT?: ChecklistProgressScalarWhereWithAggregatesInput | ChecklistProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChecklistProgress"> | string
    userId?: StringWithAggregatesFilter<"ChecklistProgress"> | string
    itemId?: StringWithAggregatesFilter<"ChecklistProgress"> | string
    checked?: BoolWithAggregatesFilter<"ChecklistProgress"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"ChecklistProgress"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    credentials?: CredentialCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    materialProgress?: MaterialProgressCreateNestedManyWithoutUserInput
    quizBest?: QuizBestCreateNestedManyWithoutUserInput
    tryoutAttempts?: TryoutAttemptCreateNestedManyWithoutUserInput
    checklistProgress?: ChecklistProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    credentials?: CredentialUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    materialProgress?: MaterialProgressUncheckedCreateNestedManyWithoutUserInput
    quizBest?: QuizBestUncheckedCreateNestedManyWithoutUserInput
    tryoutAttempts?: TryoutAttemptUncheckedCreateNestedManyWithoutUserInput
    checklistProgress?: ChecklistProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    credentials?: CredentialUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    materialProgress?: MaterialProgressUpdateManyWithoutUserNestedInput
    quizBest?: QuizBestUpdateManyWithoutUserNestedInput
    tryoutAttempts?: TryoutAttemptUpdateManyWithoutUserNestedInput
    checklistProgress?: ChecklistProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    credentials?: CredentialUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    materialProgress?: MaterialProgressUncheckedUpdateManyWithoutUserNestedInput
    quizBest?: QuizBestUncheckedUpdateManyWithoutUserNestedInput
    tryoutAttempts?: TryoutAttemptUncheckedUpdateManyWithoutUserNestedInput
    checklistProgress?: ChecklistProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateInput = {
    id?: string
    provider?: string | null
    providerAccountId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    tokenType?: string | null
    scope?: string | null
    idToken?: string | null
    sessionState?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    providerId: string
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    password?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    provider?: string | null
    providerAccountId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    tokenType?: string | null
    scope?: string | null
    idToken?: string | null
    sessionState?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    providerId: string
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    password?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenType?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionState?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenType?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionState?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    provider?: string | null
    providerAccountId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    tokenType?: string | null
    scope?: string | null
    idToken?: string | null
    sessionState?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    providerId: string
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    password?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenType?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionState?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenType?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionState?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CredentialCreateInput = {
    id?: string
    provider: string
    providerId: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCredentialsInput
  }

  export type CredentialUncheckedCreateInput = {
    id?: string
    userId: string
    provider: string
    providerId: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CredentialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCredentialsNestedInput
  }

  export type CredentialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialCreateManyInput = {
    id?: string
    userId: string
    provider: string
    providerId: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CredentialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token: string
    impersonatedBy?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token: string
    impersonatedBy?: string | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token: string
    impersonatedBy?: string | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialProgressCreateInput = {
    id?: string
    materialSlug: string
    done?: boolean
    completedAt?: Date | string
    user: UserCreateNestedOneWithoutMaterialProgressInput
  }

  export type MaterialProgressUncheckedCreateInput = {
    id?: string
    userId: string
    materialSlug: string
    done?: boolean
    completedAt?: Date | string
  }

  export type MaterialProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialSlug?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMaterialProgressNestedInput
  }

  export type MaterialProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    materialSlug?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialProgressCreateManyInput = {
    id?: string
    userId: string
    materialSlug: string
    done?: boolean
    completedAt?: Date | string
  }

  export type MaterialProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialSlug?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    materialSlug?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizBestCreateInput = {
    id?: string
    materialSlug: string
    bestScore: number
    totalQuestions: number
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutQuizBestInput
  }

  export type QuizBestUncheckedCreateInput = {
    id?: string
    userId: string
    materialSlug: string
    bestScore: number
    totalQuestions: number
    updatedAt?: Date | string
  }

  export type QuizBestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialSlug?: StringFieldUpdateOperationsInput | string
    bestScore?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuizBestNestedInput
  }

  export type QuizBestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    materialSlug?: StringFieldUpdateOperationsInput | string
    bestScore?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizBestCreateManyInput = {
    id?: string
    userId: string
    materialSlug: string
    bestScore: number
    totalQuestions: number
    updatedAt?: Date | string
  }

  export type QuizBestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialSlug?: StringFieldUpdateOperationsInput | string
    bestScore?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizBestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    materialSlug?: StringFieldUpdateOperationsInput | string
    bestScore?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TryoutAttemptCreateInput = {
    id?: string
    twk: number
    tiu: number
    tkp: number
    total: number
    passed: boolean
    durationSeconds: number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTryoutAttemptsInput
  }

  export type TryoutAttemptUncheckedCreateInput = {
    id?: string
    userId: string
    twk: number
    tiu: number
    tkp: number
    total: number
    passed: boolean
    durationSeconds: number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TryoutAttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    twk?: IntFieldUpdateOperationsInput | number
    tiu?: IntFieldUpdateOperationsInput | number
    tkp?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    durationSeconds?: IntFieldUpdateOperationsInput | number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTryoutAttemptsNestedInput
  }

  export type TryoutAttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    twk?: IntFieldUpdateOperationsInput | number
    tiu?: IntFieldUpdateOperationsInput | number
    tkp?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    durationSeconds?: IntFieldUpdateOperationsInput | number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TryoutAttemptCreateManyInput = {
    id?: string
    userId: string
    twk: number
    tiu: number
    tkp: number
    total: number
    passed: boolean
    durationSeconds: number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TryoutAttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    twk?: IntFieldUpdateOperationsInput | number
    tiu?: IntFieldUpdateOperationsInput | number
    tkp?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    durationSeconds?: IntFieldUpdateOperationsInput | number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TryoutAttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    twk?: IntFieldUpdateOperationsInput | number
    tiu?: IntFieldUpdateOperationsInput | number
    tkp?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    durationSeconds?: IntFieldUpdateOperationsInput | number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistProgressCreateInput = {
    id?: string
    itemId: string
    checked?: boolean
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChecklistProgressInput
  }

  export type ChecklistProgressUncheckedCreateInput = {
    id?: string
    userId: string
    itemId: string
    checked?: boolean
    updatedAt?: Date | string
  }

  export type ChecklistProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChecklistProgressNestedInput
  }

  export type ChecklistProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistProgressCreateManyInput = {
    id?: string
    userId: string
    itemId: string
    checked?: boolean
    updatedAt?: Date | string
  }

  export type ChecklistProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type CredentialListRelationFilter = {
    every?: CredentialWhereInput
    some?: CredentialWhereInput
    none?: CredentialWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type MaterialProgressListRelationFilter = {
    every?: MaterialProgressWhereInput
    some?: MaterialProgressWhereInput
    none?: MaterialProgressWhereInput
  }

  export type QuizBestListRelationFilter = {
    every?: QuizBestWhereInput
    some?: QuizBestWhereInput
    none?: QuizBestWhereInput
  }

  export type TryoutAttemptListRelationFilter = {
    every?: TryoutAttemptWhereInput
    some?: TryoutAttemptWhereInput
    none?: TryoutAttemptWhereInput
  }

  export type ChecklistProgressListRelationFilter = {
    every?: ChecklistProgressWhereInput
    some?: ChecklistProgressWhereInput
    none?: ChecklistProgressWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CredentialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaterialProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizBestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TryoutAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChecklistProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    tokenType?: SortOrder
    scope?: SortOrder
    idToken?: SortOrder
    sessionState?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    password?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    tokenType?: SortOrder
    scope?: SortOrder
    idToken?: SortOrder
    sessionState?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    password?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    tokenType?: SortOrder
    scope?: SortOrder
    idToken?: SortOrder
    sessionState?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    password?: SortOrder
  }

  export type CredentialProviderProviderIdCompoundUniqueInput = {
    provider: string
    providerId: string
  }

  export type CredentialCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CredentialMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CredentialMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialProgressUserIdMaterialSlugCompoundUniqueInput = {
    userId: string
    materialSlug: string
  }

  export type MaterialProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    materialSlug?: SortOrder
    done?: SortOrder
    completedAt?: SortOrder
  }

  export type MaterialProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    materialSlug?: SortOrder
    done?: SortOrder
    completedAt?: SortOrder
  }

  export type MaterialProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    materialSlug?: SortOrder
    done?: SortOrder
    completedAt?: SortOrder
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

  export type QuizBestUserIdMaterialSlugCompoundUniqueInput = {
    userId: string
    materialSlug: string
  }

  export type QuizBestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    materialSlug?: SortOrder
    bestScore?: SortOrder
    totalQuestions?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizBestAvgOrderByAggregateInput = {
    bestScore?: SortOrder
    totalQuestions?: SortOrder
  }

  export type QuizBestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    materialSlug?: SortOrder
    bestScore?: SortOrder
    totalQuestions?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizBestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    materialSlug?: SortOrder
    bestScore?: SortOrder
    totalQuestions?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizBestSumOrderByAggregateInput = {
    bestScore?: SortOrder
    totalQuestions?: SortOrder
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TryoutAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    twk?: SortOrder
    tiu?: SortOrder
    tkp?: SortOrder
    total?: SortOrder
    passed?: SortOrder
    durationSeconds?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
  }

  export type TryoutAttemptAvgOrderByAggregateInput = {
    twk?: SortOrder
    tiu?: SortOrder
    tkp?: SortOrder
    total?: SortOrder
    durationSeconds?: SortOrder
  }

  export type TryoutAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    twk?: SortOrder
    tiu?: SortOrder
    tkp?: SortOrder
    total?: SortOrder
    passed?: SortOrder
    durationSeconds?: SortOrder
    createdAt?: SortOrder
  }

  export type TryoutAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    twk?: SortOrder
    tiu?: SortOrder
    tkp?: SortOrder
    total?: SortOrder
    passed?: SortOrder
    durationSeconds?: SortOrder
    createdAt?: SortOrder
  }

  export type TryoutAttemptSumOrderByAggregateInput = {
    twk?: SortOrder
    tiu?: SortOrder
    tkp?: SortOrder
    total?: SortOrder
    durationSeconds?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ChecklistProgressUserIdItemIdCompoundUniqueInput = {
    userId: string
    itemId: string
  }

  export type ChecklistProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    checked?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChecklistProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    checked?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChecklistProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    checked?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type CredentialCreateNestedManyWithoutUserInput = {
    create?: XOR<CredentialCreateWithoutUserInput, CredentialUncheckedCreateWithoutUserInput> | CredentialCreateWithoutUserInput[] | CredentialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CredentialCreateOrConnectWithoutUserInput | CredentialCreateOrConnectWithoutUserInput[]
    createMany?: CredentialCreateManyUserInputEnvelope
    connect?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type MaterialProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<MaterialProgressCreateWithoutUserInput, MaterialProgressUncheckedCreateWithoutUserInput> | MaterialProgressCreateWithoutUserInput[] | MaterialProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MaterialProgressCreateOrConnectWithoutUserInput | MaterialProgressCreateOrConnectWithoutUserInput[]
    createMany?: MaterialProgressCreateManyUserInputEnvelope
    connect?: MaterialProgressWhereUniqueInput | MaterialProgressWhereUniqueInput[]
  }

  export type QuizBestCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizBestCreateWithoutUserInput, QuizBestUncheckedCreateWithoutUserInput> | QuizBestCreateWithoutUserInput[] | QuizBestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizBestCreateOrConnectWithoutUserInput | QuizBestCreateOrConnectWithoutUserInput[]
    createMany?: QuizBestCreateManyUserInputEnvelope
    connect?: QuizBestWhereUniqueInput | QuizBestWhereUniqueInput[]
  }

  export type TryoutAttemptCreateNestedManyWithoutUserInput = {
    create?: XOR<TryoutAttemptCreateWithoutUserInput, TryoutAttemptUncheckedCreateWithoutUserInput> | TryoutAttemptCreateWithoutUserInput[] | TryoutAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TryoutAttemptCreateOrConnectWithoutUserInput | TryoutAttemptCreateOrConnectWithoutUserInput[]
    createMany?: TryoutAttemptCreateManyUserInputEnvelope
    connect?: TryoutAttemptWhereUniqueInput | TryoutAttemptWhereUniqueInput[]
  }

  export type ChecklistProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<ChecklistProgressCreateWithoutUserInput, ChecklistProgressUncheckedCreateWithoutUserInput> | ChecklistProgressCreateWithoutUserInput[] | ChecklistProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChecklistProgressCreateOrConnectWithoutUserInput | ChecklistProgressCreateOrConnectWithoutUserInput[]
    createMany?: ChecklistProgressCreateManyUserInputEnvelope
    connect?: ChecklistProgressWhereUniqueInput | ChecklistProgressWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type CredentialUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CredentialCreateWithoutUserInput, CredentialUncheckedCreateWithoutUserInput> | CredentialCreateWithoutUserInput[] | CredentialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CredentialCreateOrConnectWithoutUserInput | CredentialCreateOrConnectWithoutUserInput[]
    createMany?: CredentialCreateManyUserInputEnvelope
    connect?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type MaterialProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MaterialProgressCreateWithoutUserInput, MaterialProgressUncheckedCreateWithoutUserInput> | MaterialProgressCreateWithoutUserInput[] | MaterialProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MaterialProgressCreateOrConnectWithoutUserInput | MaterialProgressCreateOrConnectWithoutUserInput[]
    createMany?: MaterialProgressCreateManyUserInputEnvelope
    connect?: MaterialProgressWhereUniqueInput | MaterialProgressWhereUniqueInput[]
  }

  export type QuizBestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizBestCreateWithoutUserInput, QuizBestUncheckedCreateWithoutUserInput> | QuizBestCreateWithoutUserInput[] | QuizBestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizBestCreateOrConnectWithoutUserInput | QuizBestCreateOrConnectWithoutUserInput[]
    createMany?: QuizBestCreateManyUserInputEnvelope
    connect?: QuizBestWhereUniqueInput | QuizBestWhereUniqueInput[]
  }

  export type TryoutAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TryoutAttemptCreateWithoutUserInput, TryoutAttemptUncheckedCreateWithoutUserInput> | TryoutAttemptCreateWithoutUserInput[] | TryoutAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TryoutAttemptCreateOrConnectWithoutUserInput | TryoutAttemptCreateOrConnectWithoutUserInput[]
    createMany?: TryoutAttemptCreateManyUserInputEnvelope
    connect?: TryoutAttemptWhereUniqueInput | TryoutAttemptWhereUniqueInput[]
  }

  export type ChecklistProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChecklistProgressCreateWithoutUserInput, ChecklistProgressUncheckedCreateWithoutUserInput> | ChecklistProgressCreateWithoutUserInput[] | ChecklistProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChecklistProgressCreateOrConnectWithoutUserInput | ChecklistProgressCreateOrConnectWithoutUserInput[]
    createMany?: ChecklistProgressCreateManyUserInputEnvelope
    connect?: ChecklistProgressWhereUniqueInput | ChecklistProgressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type CredentialUpdateManyWithoutUserNestedInput = {
    create?: XOR<CredentialCreateWithoutUserInput, CredentialUncheckedCreateWithoutUserInput> | CredentialCreateWithoutUserInput[] | CredentialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CredentialCreateOrConnectWithoutUserInput | CredentialCreateOrConnectWithoutUserInput[]
    upsert?: CredentialUpsertWithWhereUniqueWithoutUserInput | CredentialUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CredentialCreateManyUserInputEnvelope
    set?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    disconnect?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    delete?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    connect?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    update?: CredentialUpdateWithWhereUniqueWithoutUserInput | CredentialUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CredentialUpdateManyWithWhereWithoutUserInput | CredentialUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CredentialScalarWhereInput | CredentialScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type MaterialProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<MaterialProgressCreateWithoutUserInput, MaterialProgressUncheckedCreateWithoutUserInput> | MaterialProgressCreateWithoutUserInput[] | MaterialProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MaterialProgressCreateOrConnectWithoutUserInput | MaterialProgressCreateOrConnectWithoutUserInput[]
    upsert?: MaterialProgressUpsertWithWhereUniqueWithoutUserInput | MaterialProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MaterialProgressCreateManyUserInputEnvelope
    set?: MaterialProgressWhereUniqueInput | MaterialProgressWhereUniqueInput[]
    disconnect?: MaterialProgressWhereUniqueInput | MaterialProgressWhereUniqueInput[]
    delete?: MaterialProgressWhereUniqueInput | MaterialProgressWhereUniqueInput[]
    connect?: MaterialProgressWhereUniqueInput | MaterialProgressWhereUniqueInput[]
    update?: MaterialProgressUpdateWithWhereUniqueWithoutUserInput | MaterialProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MaterialProgressUpdateManyWithWhereWithoutUserInput | MaterialProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MaterialProgressScalarWhereInput | MaterialProgressScalarWhereInput[]
  }

  export type QuizBestUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizBestCreateWithoutUserInput, QuizBestUncheckedCreateWithoutUserInput> | QuizBestCreateWithoutUserInput[] | QuizBestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizBestCreateOrConnectWithoutUserInput | QuizBestCreateOrConnectWithoutUserInput[]
    upsert?: QuizBestUpsertWithWhereUniqueWithoutUserInput | QuizBestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizBestCreateManyUserInputEnvelope
    set?: QuizBestWhereUniqueInput | QuizBestWhereUniqueInput[]
    disconnect?: QuizBestWhereUniqueInput | QuizBestWhereUniqueInput[]
    delete?: QuizBestWhereUniqueInput | QuizBestWhereUniqueInput[]
    connect?: QuizBestWhereUniqueInput | QuizBestWhereUniqueInput[]
    update?: QuizBestUpdateWithWhereUniqueWithoutUserInput | QuizBestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizBestUpdateManyWithWhereWithoutUserInput | QuizBestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizBestScalarWhereInput | QuizBestScalarWhereInput[]
  }

  export type TryoutAttemptUpdateManyWithoutUserNestedInput = {
    create?: XOR<TryoutAttemptCreateWithoutUserInput, TryoutAttemptUncheckedCreateWithoutUserInput> | TryoutAttemptCreateWithoutUserInput[] | TryoutAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TryoutAttemptCreateOrConnectWithoutUserInput | TryoutAttemptCreateOrConnectWithoutUserInput[]
    upsert?: TryoutAttemptUpsertWithWhereUniqueWithoutUserInput | TryoutAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TryoutAttemptCreateManyUserInputEnvelope
    set?: TryoutAttemptWhereUniqueInput | TryoutAttemptWhereUniqueInput[]
    disconnect?: TryoutAttemptWhereUniqueInput | TryoutAttemptWhereUniqueInput[]
    delete?: TryoutAttemptWhereUniqueInput | TryoutAttemptWhereUniqueInput[]
    connect?: TryoutAttemptWhereUniqueInput | TryoutAttemptWhereUniqueInput[]
    update?: TryoutAttemptUpdateWithWhereUniqueWithoutUserInput | TryoutAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TryoutAttemptUpdateManyWithWhereWithoutUserInput | TryoutAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TryoutAttemptScalarWhereInput | TryoutAttemptScalarWhereInput[]
  }

  export type ChecklistProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChecklistProgressCreateWithoutUserInput, ChecklistProgressUncheckedCreateWithoutUserInput> | ChecklistProgressCreateWithoutUserInput[] | ChecklistProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChecklistProgressCreateOrConnectWithoutUserInput | ChecklistProgressCreateOrConnectWithoutUserInput[]
    upsert?: ChecklistProgressUpsertWithWhereUniqueWithoutUserInput | ChecklistProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChecklistProgressCreateManyUserInputEnvelope
    set?: ChecklistProgressWhereUniqueInput | ChecklistProgressWhereUniqueInput[]
    disconnect?: ChecklistProgressWhereUniqueInput | ChecklistProgressWhereUniqueInput[]
    delete?: ChecklistProgressWhereUniqueInput | ChecklistProgressWhereUniqueInput[]
    connect?: ChecklistProgressWhereUniqueInput | ChecklistProgressWhereUniqueInput[]
    update?: ChecklistProgressUpdateWithWhereUniqueWithoutUserInput | ChecklistProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChecklistProgressUpdateManyWithWhereWithoutUserInput | ChecklistProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChecklistProgressScalarWhereInput | ChecklistProgressScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type CredentialUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CredentialCreateWithoutUserInput, CredentialUncheckedCreateWithoutUserInput> | CredentialCreateWithoutUserInput[] | CredentialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CredentialCreateOrConnectWithoutUserInput | CredentialCreateOrConnectWithoutUserInput[]
    upsert?: CredentialUpsertWithWhereUniqueWithoutUserInput | CredentialUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CredentialCreateManyUserInputEnvelope
    set?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    disconnect?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    delete?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    connect?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    update?: CredentialUpdateWithWhereUniqueWithoutUserInput | CredentialUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CredentialUpdateManyWithWhereWithoutUserInput | CredentialUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CredentialScalarWhereInput | CredentialScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type MaterialProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MaterialProgressCreateWithoutUserInput, MaterialProgressUncheckedCreateWithoutUserInput> | MaterialProgressCreateWithoutUserInput[] | MaterialProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MaterialProgressCreateOrConnectWithoutUserInput | MaterialProgressCreateOrConnectWithoutUserInput[]
    upsert?: MaterialProgressUpsertWithWhereUniqueWithoutUserInput | MaterialProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MaterialProgressCreateManyUserInputEnvelope
    set?: MaterialProgressWhereUniqueInput | MaterialProgressWhereUniqueInput[]
    disconnect?: MaterialProgressWhereUniqueInput | MaterialProgressWhereUniqueInput[]
    delete?: MaterialProgressWhereUniqueInput | MaterialProgressWhereUniqueInput[]
    connect?: MaterialProgressWhereUniqueInput | MaterialProgressWhereUniqueInput[]
    update?: MaterialProgressUpdateWithWhereUniqueWithoutUserInput | MaterialProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MaterialProgressUpdateManyWithWhereWithoutUserInput | MaterialProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MaterialProgressScalarWhereInput | MaterialProgressScalarWhereInput[]
  }

  export type QuizBestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizBestCreateWithoutUserInput, QuizBestUncheckedCreateWithoutUserInput> | QuizBestCreateWithoutUserInput[] | QuizBestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizBestCreateOrConnectWithoutUserInput | QuizBestCreateOrConnectWithoutUserInput[]
    upsert?: QuizBestUpsertWithWhereUniqueWithoutUserInput | QuizBestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizBestCreateManyUserInputEnvelope
    set?: QuizBestWhereUniqueInput | QuizBestWhereUniqueInput[]
    disconnect?: QuizBestWhereUniqueInput | QuizBestWhereUniqueInput[]
    delete?: QuizBestWhereUniqueInput | QuizBestWhereUniqueInput[]
    connect?: QuizBestWhereUniqueInput | QuizBestWhereUniqueInput[]
    update?: QuizBestUpdateWithWhereUniqueWithoutUserInput | QuizBestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizBestUpdateManyWithWhereWithoutUserInput | QuizBestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizBestScalarWhereInput | QuizBestScalarWhereInput[]
  }

  export type TryoutAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TryoutAttemptCreateWithoutUserInput, TryoutAttemptUncheckedCreateWithoutUserInput> | TryoutAttemptCreateWithoutUserInput[] | TryoutAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TryoutAttemptCreateOrConnectWithoutUserInput | TryoutAttemptCreateOrConnectWithoutUserInput[]
    upsert?: TryoutAttemptUpsertWithWhereUniqueWithoutUserInput | TryoutAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TryoutAttemptCreateManyUserInputEnvelope
    set?: TryoutAttemptWhereUniqueInput | TryoutAttemptWhereUniqueInput[]
    disconnect?: TryoutAttemptWhereUniqueInput | TryoutAttemptWhereUniqueInput[]
    delete?: TryoutAttemptWhereUniqueInput | TryoutAttemptWhereUniqueInput[]
    connect?: TryoutAttemptWhereUniqueInput | TryoutAttemptWhereUniqueInput[]
    update?: TryoutAttemptUpdateWithWhereUniqueWithoutUserInput | TryoutAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TryoutAttemptUpdateManyWithWhereWithoutUserInput | TryoutAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TryoutAttemptScalarWhereInput | TryoutAttemptScalarWhereInput[]
  }

  export type ChecklistProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChecklistProgressCreateWithoutUserInput, ChecklistProgressUncheckedCreateWithoutUserInput> | ChecklistProgressCreateWithoutUserInput[] | ChecklistProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChecklistProgressCreateOrConnectWithoutUserInput | ChecklistProgressCreateOrConnectWithoutUserInput[]
    upsert?: ChecklistProgressUpsertWithWhereUniqueWithoutUserInput | ChecklistProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChecklistProgressCreateManyUserInputEnvelope
    set?: ChecklistProgressWhereUniqueInput | ChecklistProgressWhereUniqueInput[]
    disconnect?: ChecklistProgressWhereUniqueInput | ChecklistProgressWhereUniqueInput[]
    delete?: ChecklistProgressWhereUniqueInput | ChecklistProgressWhereUniqueInput[]
    connect?: ChecklistProgressWhereUniqueInput | ChecklistProgressWhereUniqueInput[]
    update?: ChecklistProgressUpdateWithWhereUniqueWithoutUserInput | ChecklistProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChecklistProgressUpdateManyWithWhereWithoutUserInput | ChecklistProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChecklistProgressScalarWhereInput | ChecklistProgressScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutCredentialsInput = {
    create?: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCredentialsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCredentialsNestedInput = {
    create?: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCredentialsInput
    upsert?: UserUpsertWithoutCredentialsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCredentialsInput, UserUpdateWithoutCredentialsInput>, UserUncheckedUpdateWithoutCredentialsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutMaterialProgressInput = {
    create?: XOR<UserCreateWithoutMaterialProgressInput, UserUncheckedCreateWithoutMaterialProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaterialProgressInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMaterialProgressNestedInput = {
    create?: XOR<UserCreateWithoutMaterialProgressInput, UserUncheckedCreateWithoutMaterialProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaterialProgressInput
    upsert?: UserUpsertWithoutMaterialProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMaterialProgressInput, UserUpdateWithoutMaterialProgressInput>, UserUncheckedUpdateWithoutMaterialProgressInput>
  }

  export type UserCreateNestedOneWithoutQuizBestInput = {
    create?: XOR<UserCreateWithoutQuizBestInput, UserUncheckedCreateWithoutQuizBestInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizBestInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutQuizBestNestedInput = {
    create?: XOR<UserCreateWithoutQuizBestInput, UserUncheckedCreateWithoutQuizBestInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizBestInput
    upsert?: UserUpsertWithoutQuizBestInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuizBestInput, UserUpdateWithoutQuizBestInput>, UserUncheckedUpdateWithoutQuizBestInput>
  }

  export type UserCreateNestedOneWithoutTryoutAttemptsInput = {
    create?: XOR<UserCreateWithoutTryoutAttemptsInput, UserUncheckedCreateWithoutTryoutAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTryoutAttemptsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTryoutAttemptsNestedInput = {
    create?: XOR<UserCreateWithoutTryoutAttemptsInput, UserUncheckedCreateWithoutTryoutAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTryoutAttemptsInput
    upsert?: UserUpsertWithoutTryoutAttemptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTryoutAttemptsInput, UserUpdateWithoutTryoutAttemptsInput>, UserUncheckedUpdateWithoutTryoutAttemptsInput>
  }

  export type UserCreateNestedOneWithoutChecklistProgressInput = {
    create?: XOR<UserCreateWithoutChecklistProgressInput, UserUncheckedCreateWithoutChecklistProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutChecklistProgressInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChecklistProgressNestedInput = {
    create?: XOR<UserCreateWithoutChecklistProgressInput, UserUncheckedCreateWithoutChecklistProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutChecklistProgressInput
    upsert?: UserUpsertWithoutChecklistProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChecklistProgressInput, UserUpdateWithoutChecklistProgressInput>, UserUncheckedUpdateWithoutChecklistProgressInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    provider?: string | null
    providerAccountId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    tokenType?: string | null
    scope?: string | null
    idToken?: string | null
    sessionState?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    providerId: string
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    password?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    provider?: string | null
    providerAccountId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    tokenType?: string | null
    scope?: string | null
    idToken?: string | null
    sessionState?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    providerId: string
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    password?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CredentialCreateWithoutUserInput = {
    id?: string
    provider: string
    providerId: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CredentialUncheckedCreateWithoutUserInput = {
    id?: string
    provider: string
    providerId: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CredentialCreateOrConnectWithoutUserInput = {
    where: CredentialWhereUniqueInput
    create: XOR<CredentialCreateWithoutUserInput, CredentialUncheckedCreateWithoutUserInput>
  }

  export type CredentialCreateManyUserInputEnvelope = {
    data: CredentialCreateManyUserInput | CredentialCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token: string
    impersonatedBy?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token: string
    impersonatedBy?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MaterialProgressCreateWithoutUserInput = {
    id?: string
    materialSlug: string
    done?: boolean
    completedAt?: Date | string
  }

  export type MaterialProgressUncheckedCreateWithoutUserInput = {
    id?: string
    materialSlug: string
    done?: boolean
    completedAt?: Date | string
  }

  export type MaterialProgressCreateOrConnectWithoutUserInput = {
    where: MaterialProgressWhereUniqueInput
    create: XOR<MaterialProgressCreateWithoutUserInput, MaterialProgressUncheckedCreateWithoutUserInput>
  }

  export type MaterialProgressCreateManyUserInputEnvelope = {
    data: MaterialProgressCreateManyUserInput | MaterialProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuizBestCreateWithoutUserInput = {
    id?: string
    materialSlug: string
    bestScore: number
    totalQuestions: number
    updatedAt?: Date | string
  }

  export type QuizBestUncheckedCreateWithoutUserInput = {
    id?: string
    materialSlug: string
    bestScore: number
    totalQuestions: number
    updatedAt?: Date | string
  }

  export type QuizBestCreateOrConnectWithoutUserInput = {
    where: QuizBestWhereUniqueInput
    create: XOR<QuizBestCreateWithoutUserInput, QuizBestUncheckedCreateWithoutUserInput>
  }

  export type QuizBestCreateManyUserInputEnvelope = {
    data: QuizBestCreateManyUserInput | QuizBestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TryoutAttemptCreateWithoutUserInput = {
    id?: string
    twk: number
    tiu: number
    tkp: number
    total: number
    passed: boolean
    durationSeconds: number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TryoutAttemptUncheckedCreateWithoutUserInput = {
    id?: string
    twk: number
    tiu: number
    tkp: number
    total: number
    passed: boolean
    durationSeconds: number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TryoutAttemptCreateOrConnectWithoutUserInput = {
    where: TryoutAttemptWhereUniqueInput
    create: XOR<TryoutAttemptCreateWithoutUserInput, TryoutAttemptUncheckedCreateWithoutUserInput>
  }

  export type TryoutAttemptCreateManyUserInputEnvelope = {
    data: TryoutAttemptCreateManyUserInput | TryoutAttemptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChecklistProgressCreateWithoutUserInput = {
    id?: string
    itemId: string
    checked?: boolean
    updatedAt?: Date | string
  }

  export type ChecklistProgressUncheckedCreateWithoutUserInput = {
    id?: string
    itemId: string
    checked?: boolean
    updatedAt?: Date | string
  }

  export type ChecklistProgressCreateOrConnectWithoutUserInput = {
    where: ChecklistProgressWhereUniqueInput
    create: XOR<ChecklistProgressCreateWithoutUserInput, ChecklistProgressUncheckedCreateWithoutUserInput>
  }

  export type ChecklistProgressCreateManyUserInputEnvelope = {
    data: ChecklistProgressCreateManyUserInput | ChecklistProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    provider?: StringNullableFilter<"Account"> | string | null
    providerAccountId?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    tokenType?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    sessionState?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    password?: StringNullableFilter<"Account"> | string | null
  }

  export type CredentialUpsertWithWhereUniqueWithoutUserInput = {
    where: CredentialWhereUniqueInput
    update: XOR<CredentialUpdateWithoutUserInput, CredentialUncheckedUpdateWithoutUserInput>
    create: XOR<CredentialCreateWithoutUserInput, CredentialUncheckedCreateWithoutUserInput>
  }

  export type CredentialUpdateWithWhereUniqueWithoutUserInput = {
    where: CredentialWhereUniqueInput
    data: XOR<CredentialUpdateWithoutUserInput, CredentialUncheckedUpdateWithoutUserInput>
  }

  export type CredentialUpdateManyWithWhereWithoutUserInput = {
    where: CredentialScalarWhereInput
    data: XOR<CredentialUpdateManyMutationInput, CredentialUncheckedUpdateManyWithoutUserInput>
  }

  export type CredentialScalarWhereInput = {
    AND?: CredentialScalarWhereInput | CredentialScalarWhereInput[]
    OR?: CredentialScalarWhereInput[]
    NOT?: CredentialScalarWhereInput | CredentialScalarWhereInput[]
    id?: StringFilter<"Credential"> | string
    userId?: StringFilter<"Credential"> | string
    provider?: StringFilter<"Credential"> | string
    providerId?: StringFilter<"Credential"> | string
    password?: StringFilter<"Credential"> | string
    createdAt?: DateTimeFilter<"Credential"> | Date | string
    updatedAt?: DateTimeFilter<"Credential"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
  }

  export type MaterialProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: MaterialProgressWhereUniqueInput
    update: XOR<MaterialProgressUpdateWithoutUserInput, MaterialProgressUncheckedUpdateWithoutUserInput>
    create: XOR<MaterialProgressCreateWithoutUserInput, MaterialProgressUncheckedCreateWithoutUserInput>
  }

  export type MaterialProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: MaterialProgressWhereUniqueInput
    data: XOR<MaterialProgressUpdateWithoutUserInput, MaterialProgressUncheckedUpdateWithoutUserInput>
  }

  export type MaterialProgressUpdateManyWithWhereWithoutUserInput = {
    where: MaterialProgressScalarWhereInput
    data: XOR<MaterialProgressUpdateManyMutationInput, MaterialProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type MaterialProgressScalarWhereInput = {
    AND?: MaterialProgressScalarWhereInput | MaterialProgressScalarWhereInput[]
    OR?: MaterialProgressScalarWhereInput[]
    NOT?: MaterialProgressScalarWhereInput | MaterialProgressScalarWhereInput[]
    id?: StringFilter<"MaterialProgress"> | string
    userId?: StringFilter<"MaterialProgress"> | string
    materialSlug?: StringFilter<"MaterialProgress"> | string
    done?: BoolFilter<"MaterialProgress"> | boolean
    completedAt?: DateTimeFilter<"MaterialProgress"> | Date | string
  }

  export type QuizBestUpsertWithWhereUniqueWithoutUserInput = {
    where: QuizBestWhereUniqueInput
    update: XOR<QuizBestUpdateWithoutUserInput, QuizBestUncheckedUpdateWithoutUserInput>
    create: XOR<QuizBestCreateWithoutUserInput, QuizBestUncheckedCreateWithoutUserInput>
  }

  export type QuizBestUpdateWithWhereUniqueWithoutUserInput = {
    where: QuizBestWhereUniqueInput
    data: XOR<QuizBestUpdateWithoutUserInput, QuizBestUncheckedUpdateWithoutUserInput>
  }

  export type QuizBestUpdateManyWithWhereWithoutUserInput = {
    where: QuizBestScalarWhereInput
    data: XOR<QuizBestUpdateManyMutationInput, QuizBestUncheckedUpdateManyWithoutUserInput>
  }

  export type QuizBestScalarWhereInput = {
    AND?: QuizBestScalarWhereInput | QuizBestScalarWhereInput[]
    OR?: QuizBestScalarWhereInput[]
    NOT?: QuizBestScalarWhereInput | QuizBestScalarWhereInput[]
    id?: StringFilter<"QuizBest"> | string
    userId?: StringFilter<"QuizBest"> | string
    materialSlug?: StringFilter<"QuizBest"> | string
    bestScore?: IntFilter<"QuizBest"> | number
    totalQuestions?: IntFilter<"QuizBest"> | number
    updatedAt?: DateTimeFilter<"QuizBest"> | Date | string
  }

  export type TryoutAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: TryoutAttemptWhereUniqueInput
    update: XOR<TryoutAttemptUpdateWithoutUserInput, TryoutAttemptUncheckedUpdateWithoutUserInput>
    create: XOR<TryoutAttemptCreateWithoutUserInput, TryoutAttemptUncheckedCreateWithoutUserInput>
  }

  export type TryoutAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: TryoutAttemptWhereUniqueInput
    data: XOR<TryoutAttemptUpdateWithoutUserInput, TryoutAttemptUncheckedUpdateWithoutUserInput>
  }

  export type TryoutAttemptUpdateManyWithWhereWithoutUserInput = {
    where: TryoutAttemptScalarWhereInput
    data: XOR<TryoutAttemptUpdateManyMutationInput, TryoutAttemptUncheckedUpdateManyWithoutUserInput>
  }

  export type TryoutAttemptScalarWhereInput = {
    AND?: TryoutAttemptScalarWhereInput | TryoutAttemptScalarWhereInput[]
    OR?: TryoutAttemptScalarWhereInput[]
    NOT?: TryoutAttemptScalarWhereInput | TryoutAttemptScalarWhereInput[]
    id?: StringFilter<"TryoutAttempt"> | string
    userId?: StringFilter<"TryoutAttempt"> | string
    twk?: IntFilter<"TryoutAttempt"> | number
    tiu?: IntFilter<"TryoutAttempt"> | number
    tkp?: IntFilter<"TryoutAttempt"> | number
    total?: IntFilter<"TryoutAttempt"> | number
    passed?: BoolFilter<"TryoutAttempt"> | boolean
    durationSeconds?: IntFilter<"TryoutAttempt"> | number
    answers?: JsonNullableFilter<"TryoutAttempt">
    createdAt?: DateTimeFilter<"TryoutAttempt"> | Date | string
  }

  export type ChecklistProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: ChecklistProgressWhereUniqueInput
    update: XOR<ChecklistProgressUpdateWithoutUserInput, ChecklistProgressUncheckedUpdateWithoutUserInput>
    create: XOR<ChecklistProgressCreateWithoutUserInput, ChecklistProgressUncheckedCreateWithoutUserInput>
  }

  export type ChecklistProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: ChecklistProgressWhereUniqueInput
    data: XOR<ChecklistProgressUpdateWithoutUserInput, ChecklistProgressUncheckedUpdateWithoutUserInput>
  }

  export type ChecklistProgressUpdateManyWithWhereWithoutUserInput = {
    where: ChecklistProgressScalarWhereInput
    data: XOR<ChecklistProgressUpdateManyMutationInput, ChecklistProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type ChecklistProgressScalarWhereInput = {
    AND?: ChecklistProgressScalarWhereInput | ChecklistProgressScalarWhereInput[]
    OR?: ChecklistProgressScalarWhereInput[]
    NOT?: ChecklistProgressScalarWhereInput | ChecklistProgressScalarWhereInput[]
    id?: StringFilter<"ChecklistProgress"> | string
    userId?: StringFilter<"ChecklistProgress"> | string
    itemId?: StringFilter<"ChecklistProgress"> | string
    checked?: BoolFilter<"ChecklistProgress"> | boolean
    updatedAt?: DateTimeFilter<"ChecklistProgress"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    credentials?: CredentialCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    materialProgress?: MaterialProgressCreateNestedManyWithoutUserInput
    quizBest?: QuizBestCreateNestedManyWithoutUserInput
    tryoutAttempts?: TryoutAttemptCreateNestedManyWithoutUserInput
    checklistProgress?: ChecklistProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    credentials?: CredentialUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    materialProgress?: MaterialProgressUncheckedCreateNestedManyWithoutUserInput
    quizBest?: QuizBestUncheckedCreateNestedManyWithoutUserInput
    tryoutAttempts?: TryoutAttemptUncheckedCreateNestedManyWithoutUserInput
    checklistProgress?: ChecklistProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    credentials?: CredentialUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    materialProgress?: MaterialProgressUpdateManyWithoutUserNestedInput
    quizBest?: QuizBestUpdateManyWithoutUserNestedInput
    tryoutAttempts?: TryoutAttemptUpdateManyWithoutUserNestedInput
    checklistProgress?: ChecklistProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    credentials?: CredentialUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    materialProgress?: MaterialProgressUncheckedUpdateManyWithoutUserNestedInput
    quizBest?: QuizBestUncheckedUpdateManyWithoutUserNestedInput
    tryoutAttempts?: TryoutAttemptUncheckedUpdateManyWithoutUserNestedInput
    checklistProgress?: ChecklistProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCredentialsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    materialProgress?: MaterialProgressCreateNestedManyWithoutUserInput
    quizBest?: QuizBestCreateNestedManyWithoutUserInput
    tryoutAttempts?: TryoutAttemptCreateNestedManyWithoutUserInput
    checklistProgress?: ChecklistProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCredentialsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    materialProgress?: MaterialProgressUncheckedCreateNestedManyWithoutUserInput
    quizBest?: QuizBestUncheckedCreateNestedManyWithoutUserInput
    tryoutAttempts?: TryoutAttemptUncheckedCreateNestedManyWithoutUserInput
    checklistProgress?: ChecklistProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCredentialsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
  }

  export type UserUpsertWithoutCredentialsInput = {
    update: XOR<UserUpdateWithoutCredentialsInput, UserUncheckedUpdateWithoutCredentialsInput>
    create: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCredentialsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCredentialsInput, UserUncheckedUpdateWithoutCredentialsInput>
  }

  export type UserUpdateWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    materialProgress?: MaterialProgressUpdateManyWithoutUserNestedInput
    quizBest?: QuizBestUpdateManyWithoutUserNestedInput
    tryoutAttempts?: TryoutAttemptUpdateManyWithoutUserNestedInput
    checklistProgress?: ChecklistProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    materialProgress?: MaterialProgressUncheckedUpdateManyWithoutUserNestedInput
    quizBest?: QuizBestUncheckedUpdateManyWithoutUserNestedInput
    tryoutAttempts?: TryoutAttemptUncheckedUpdateManyWithoutUserNestedInput
    checklistProgress?: ChecklistProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    credentials?: CredentialCreateNestedManyWithoutUserInput
    materialProgress?: MaterialProgressCreateNestedManyWithoutUserInput
    quizBest?: QuizBestCreateNestedManyWithoutUserInput
    tryoutAttempts?: TryoutAttemptCreateNestedManyWithoutUserInput
    checklistProgress?: ChecklistProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    credentials?: CredentialUncheckedCreateNestedManyWithoutUserInput
    materialProgress?: MaterialProgressUncheckedCreateNestedManyWithoutUserInput
    quizBest?: QuizBestUncheckedCreateNestedManyWithoutUserInput
    tryoutAttempts?: TryoutAttemptUncheckedCreateNestedManyWithoutUserInput
    checklistProgress?: ChecklistProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    credentials?: CredentialUpdateManyWithoutUserNestedInput
    materialProgress?: MaterialProgressUpdateManyWithoutUserNestedInput
    quizBest?: QuizBestUpdateManyWithoutUserNestedInput
    tryoutAttempts?: TryoutAttemptUpdateManyWithoutUserNestedInput
    checklistProgress?: ChecklistProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    credentials?: CredentialUncheckedUpdateManyWithoutUserNestedInput
    materialProgress?: MaterialProgressUncheckedUpdateManyWithoutUserNestedInput
    quizBest?: QuizBestUncheckedUpdateManyWithoutUserNestedInput
    tryoutAttempts?: TryoutAttemptUncheckedUpdateManyWithoutUserNestedInput
    checklistProgress?: ChecklistProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMaterialProgressInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    credentials?: CredentialCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    quizBest?: QuizBestCreateNestedManyWithoutUserInput
    tryoutAttempts?: TryoutAttemptCreateNestedManyWithoutUserInput
    checklistProgress?: ChecklistProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMaterialProgressInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    credentials?: CredentialUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    quizBest?: QuizBestUncheckedCreateNestedManyWithoutUserInput
    tryoutAttempts?: TryoutAttemptUncheckedCreateNestedManyWithoutUserInput
    checklistProgress?: ChecklistProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMaterialProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMaterialProgressInput, UserUncheckedCreateWithoutMaterialProgressInput>
  }

  export type UserUpsertWithoutMaterialProgressInput = {
    update: XOR<UserUpdateWithoutMaterialProgressInput, UserUncheckedUpdateWithoutMaterialProgressInput>
    create: XOR<UserCreateWithoutMaterialProgressInput, UserUncheckedCreateWithoutMaterialProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMaterialProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMaterialProgressInput, UserUncheckedUpdateWithoutMaterialProgressInput>
  }

  export type UserUpdateWithoutMaterialProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    credentials?: CredentialUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    quizBest?: QuizBestUpdateManyWithoutUserNestedInput
    tryoutAttempts?: TryoutAttemptUpdateManyWithoutUserNestedInput
    checklistProgress?: ChecklistProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMaterialProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    credentials?: CredentialUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    quizBest?: QuizBestUncheckedUpdateManyWithoutUserNestedInput
    tryoutAttempts?: TryoutAttemptUncheckedUpdateManyWithoutUserNestedInput
    checklistProgress?: ChecklistProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutQuizBestInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    credentials?: CredentialCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    materialProgress?: MaterialProgressCreateNestedManyWithoutUserInput
    tryoutAttempts?: TryoutAttemptCreateNestedManyWithoutUserInput
    checklistProgress?: ChecklistProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuizBestInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    credentials?: CredentialUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    materialProgress?: MaterialProgressUncheckedCreateNestedManyWithoutUserInput
    tryoutAttempts?: TryoutAttemptUncheckedCreateNestedManyWithoutUserInput
    checklistProgress?: ChecklistProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuizBestInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuizBestInput, UserUncheckedCreateWithoutQuizBestInput>
  }

  export type UserUpsertWithoutQuizBestInput = {
    update: XOR<UserUpdateWithoutQuizBestInput, UserUncheckedUpdateWithoutQuizBestInput>
    create: XOR<UserCreateWithoutQuizBestInput, UserUncheckedCreateWithoutQuizBestInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuizBestInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuizBestInput, UserUncheckedUpdateWithoutQuizBestInput>
  }

  export type UserUpdateWithoutQuizBestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    credentials?: CredentialUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    materialProgress?: MaterialProgressUpdateManyWithoutUserNestedInput
    tryoutAttempts?: TryoutAttemptUpdateManyWithoutUserNestedInput
    checklistProgress?: ChecklistProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuizBestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    credentials?: CredentialUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    materialProgress?: MaterialProgressUncheckedUpdateManyWithoutUserNestedInput
    tryoutAttempts?: TryoutAttemptUncheckedUpdateManyWithoutUserNestedInput
    checklistProgress?: ChecklistProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTryoutAttemptsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    credentials?: CredentialCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    materialProgress?: MaterialProgressCreateNestedManyWithoutUserInput
    quizBest?: QuizBestCreateNestedManyWithoutUserInput
    checklistProgress?: ChecklistProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTryoutAttemptsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    credentials?: CredentialUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    materialProgress?: MaterialProgressUncheckedCreateNestedManyWithoutUserInput
    quizBest?: QuizBestUncheckedCreateNestedManyWithoutUserInput
    checklistProgress?: ChecklistProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTryoutAttemptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTryoutAttemptsInput, UserUncheckedCreateWithoutTryoutAttemptsInput>
  }

  export type UserUpsertWithoutTryoutAttemptsInput = {
    update: XOR<UserUpdateWithoutTryoutAttemptsInput, UserUncheckedUpdateWithoutTryoutAttemptsInput>
    create: XOR<UserCreateWithoutTryoutAttemptsInput, UserUncheckedCreateWithoutTryoutAttemptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTryoutAttemptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTryoutAttemptsInput, UserUncheckedUpdateWithoutTryoutAttemptsInput>
  }

  export type UserUpdateWithoutTryoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    credentials?: CredentialUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    materialProgress?: MaterialProgressUpdateManyWithoutUserNestedInput
    quizBest?: QuizBestUpdateManyWithoutUserNestedInput
    checklistProgress?: ChecklistProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTryoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    credentials?: CredentialUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    materialProgress?: MaterialProgressUncheckedUpdateManyWithoutUserNestedInput
    quizBest?: QuizBestUncheckedUpdateManyWithoutUserNestedInput
    checklistProgress?: ChecklistProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutChecklistProgressInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    credentials?: CredentialCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    materialProgress?: MaterialProgressCreateNestedManyWithoutUserInput
    quizBest?: QuizBestCreateNestedManyWithoutUserInput
    tryoutAttempts?: TryoutAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChecklistProgressInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    credentials?: CredentialUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    materialProgress?: MaterialProgressUncheckedCreateNestedManyWithoutUserInput
    quizBest?: QuizBestUncheckedCreateNestedManyWithoutUserInput
    tryoutAttempts?: TryoutAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChecklistProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChecklistProgressInput, UserUncheckedCreateWithoutChecklistProgressInput>
  }

  export type UserUpsertWithoutChecklistProgressInput = {
    update: XOR<UserUpdateWithoutChecklistProgressInput, UserUncheckedUpdateWithoutChecklistProgressInput>
    create: XOR<UserCreateWithoutChecklistProgressInput, UserUncheckedCreateWithoutChecklistProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChecklistProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChecklistProgressInput, UserUncheckedUpdateWithoutChecklistProgressInput>
  }

  export type UserUpdateWithoutChecklistProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    credentials?: CredentialUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    materialProgress?: MaterialProgressUpdateManyWithoutUserNestedInput
    quizBest?: QuizBestUpdateManyWithoutUserNestedInput
    tryoutAttempts?: TryoutAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChecklistProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    credentials?: CredentialUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    materialProgress?: MaterialProgressUncheckedUpdateManyWithoutUserNestedInput
    quizBest?: QuizBestUncheckedUpdateManyWithoutUserNestedInput
    tryoutAttempts?: TryoutAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    provider?: string | null
    providerAccountId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    tokenType?: string | null
    scope?: string | null
    idToken?: string | null
    sessionState?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    providerId: string
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    password?: string | null
  }

  export type CredentialCreateManyUserInput = {
    id?: string
    provider: string
    providerId: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token: string
    impersonatedBy?: string | null
  }

  export type MaterialProgressCreateManyUserInput = {
    id?: string
    materialSlug: string
    done?: boolean
    completedAt?: Date | string
  }

  export type QuizBestCreateManyUserInput = {
    id?: string
    materialSlug: string
    bestScore: number
    totalQuestions: number
    updatedAt?: Date | string
  }

  export type TryoutAttemptCreateManyUserInput = {
    id?: string
    twk: number
    tiu: number
    tkp: number
    total: number
    passed: boolean
    durationSeconds: number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ChecklistProgressCreateManyUserInput = {
    id?: string
    itemId: string
    checked?: boolean
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenType?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionState?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenType?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionState?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenType?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionState?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CredentialUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaterialProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialSlug?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialSlug?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialSlug?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizBestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialSlug?: StringFieldUpdateOperationsInput | string
    bestScore?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizBestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialSlug?: StringFieldUpdateOperationsInput | string
    bestScore?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizBestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialSlug?: StringFieldUpdateOperationsInput | string
    bestScore?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TryoutAttemptUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    twk?: IntFieldUpdateOperationsInput | number
    tiu?: IntFieldUpdateOperationsInput | number
    tkp?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    durationSeconds?: IntFieldUpdateOperationsInput | number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TryoutAttemptUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    twk?: IntFieldUpdateOperationsInput | number
    tiu?: IntFieldUpdateOperationsInput | number
    tkp?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    durationSeconds?: IntFieldUpdateOperationsInput | number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TryoutAttemptUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    twk?: IntFieldUpdateOperationsInput | number
    tiu?: IntFieldUpdateOperationsInput | number
    tkp?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    durationSeconds?: IntFieldUpdateOperationsInput | number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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