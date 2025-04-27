
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model Suppliers
 * 
 */
export type Suppliers = $Result.DefaultSelection<Prisma.$SuppliersPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Records
 * 
 */
export type Records = $Result.DefaultSelection<Prisma.$RecordsPayload>
/**
 * Model Purhases
 * 
 */
export type Purhases = $Result.DefaultSelection<Prisma.$PurhasesPayload>
/**
 * Model config
 * 
 */
export type config = $Result.DefaultSelection<Prisma.$configPayload>

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
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suppliers`: Exposes CRUD operations for the **Suppliers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.suppliers.findMany()
    * ```
    */
  get suppliers(): Prisma.SuppliersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.records`: Exposes CRUD operations for the **Records** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Records
    * const records = await prisma.records.findMany()
    * ```
    */
  get records(): Prisma.RecordsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purhases`: Exposes CRUD operations for the **Purhases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purhases
    * const purhases = await prisma.purhases.findMany()
    * ```
    */
  get purhases(): Prisma.PurhasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.config`: Exposes CRUD operations for the **config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configs
    * const configs = await prisma.config.findMany()
    * ```
    */
  get config(): Prisma.configDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Categories: 'Categories',
    Suppliers: 'Suppliers',
    Products: 'Products',
    Records: 'Records',
    Purhases: 'Purhases',
    config: 'config'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "categories" | "suppliers" | "products" | "records" | "purhases" | "config"
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
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Suppliers: {
        payload: Prisma.$SuppliersPayload<ExtArgs>
        fields: Prisma.SuppliersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuppliersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuppliersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>
          }
          findFirst: {
            args: Prisma.SuppliersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuppliersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>
          }
          findMany: {
            args: Prisma.SuppliersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>[]
          }
          create: {
            args: Prisma.SuppliersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>
          }
          createMany: {
            args: Prisma.SuppliersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuppliersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>[]
          }
          delete: {
            args: Prisma.SuppliersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>
          }
          update: {
            args: Prisma.SuppliersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>
          }
          deleteMany: {
            args: Prisma.SuppliersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuppliersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuppliersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>[]
          }
          upsert: {
            args: Prisma.SuppliersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>
          }
          aggregate: {
            args: Prisma.SuppliersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuppliers>
          }
          groupBy: {
            args: Prisma.SuppliersGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuppliersGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuppliersCountArgs<ExtArgs>
            result: $Utils.Optional<SuppliersCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Records: {
        payload: Prisma.$RecordsPayload<ExtArgs>
        fields: Prisma.RecordsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecordsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecordsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          findFirst: {
            args: Prisma.RecordsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecordsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          findMany: {
            args: Prisma.RecordsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>[]
          }
          create: {
            args: Prisma.RecordsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          createMany: {
            args: Prisma.RecordsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecordsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>[]
          }
          delete: {
            args: Prisma.RecordsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          update: {
            args: Prisma.RecordsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          deleteMany: {
            args: Prisma.RecordsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecordsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecordsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>[]
          }
          upsert: {
            args: Prisma.RecordsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          aggregate: {
            args: Prisma.RecordsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecords>
          }
          groupBy: {
            args: Prisma.RecordsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecordsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecordsCountArgs<ExtArgs>
            result: $Utils.Optional<RecordsCountAggregateOutputType> | number
          }
        }
      }
      Purhases: {
        payload: Prisma.$PurhasesPayload<ExtArgs>
        fields: Prisma.PurhasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurhasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurhasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurhasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurhasesPayload>
          }
          findFirst: {
            args: Prisma.PurhasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurhasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurhasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurhasesPayload>
          }
          findMany: {
            args: Prisma.PurhasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurhasesPayload>[]
          }
          create: {
            args: Prisma.PurhasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurhasesPayload>
          }
          createMany: {
            args: Prisma.PurhasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurhasesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurhasesPayload>[]
          }
          delete: {
            args: Prisma.PurhasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurhasesPayload>
          }
          update: {
            args: Prisma.PurhasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurhasesPayload>
          }
          deleteMany: {
            args: Prisma.PurhasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurhasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurhasesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurhasesPayload>[]
          }
          upsert: {
            args: Prisma.PurhasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurhasesPayload>
          }
          aggregate: {
            args: Prisma.PurhasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurhases>
          }
          groupBy: {
            args: Prisma.PurhasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurhasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurhasesCountArgs<ExtArgs>
            result: $Utils.Optional<PurhasesCountAggregateOutputType> | number
          }
        }
      }
      config: {
        payload: Prisma.$configPayload<ExtArgs>
        fields: Prisma.configFieldRefs
        operations: {
          findUnique: {
            args: Prisma.configFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.configFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configPayload>
          }
          findFirst: {
            args: Prisma.configFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.configFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configPayload>
          }
          findMany: {
            args: Prisma.configFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configPayload>[]
          }
          create: {
            args: Prisma.configCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configPayload>
          }
          createMany: {
            args: Prisma.configCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.configCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configPayload>[]
          }
          delete: {
            args: Prisma.configDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configPayload>
          }
          update: {
            args: Prisma.configUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configPayload>
          }
          deleteMany: {
            args: Prisma.configDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.configUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.configUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configPayload>[]
          }
          upsert: {
            args: Prisma.configUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configPayload>
          }
          aggregate: {
            args: Prisma.ConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfig>
          }
          groupBy: {
            args: Prisma.configGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.configCountArgs<ExtArgs>
            result: $Utils.Optional<ConfigCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    categories?: CategoriesOmit
    suppliers?: SuppliersOmit
    products?: ProductsOmit
    records?: RecordsOmit
    purhases?: PurhasesOmit
    config?: configOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    Records: number
    Purhases: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Records?: boolean | UserCountOutputTypeCountRecordsArgs
    Purhases?: boolean | UserCountOutputTypeCountPurhasesArgs
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
  export type UserCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurhasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurhasesWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    Products: number
    config: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | CategoriesCountOutputTypeCountProductsArgs
    config?: boolean | CategoriesCountOutputTypeCountConfigArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: configWhereInput
  }


  /**
   * Count Type SuppliersCountOutputType
   */

  export type SuppliersCountOutputType = {
    Products: number
  }

  export type SuppliersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | SuppliersCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * SuppliersCountOutputType without action
   */
  export type SuppliersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuppliersCountOutputType
     */
    select?: SuppliersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuppliersCountOutputType without action
   */
  export type SuppliersCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    Records: number
    Purhases: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Records?: boolean | ProductsCountOutputTypeCountRecordsArgs
    Purhases?: boolean | ProductsCountOutputTypeCountPurhasesArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountPurhasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurhasesWhereInput
  }


  /**
   * Count Type RecordsCountOutputType
   */

  export type RecordsCountOutputType = {
    productList: number
  }

  export type RecordsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productList?: boolean | RecordsCountOutputTypeCountProductListArgs
  }

  // Custom InputTypes
  /**
   * RecordsCountOutputType without action
   */
  export type RecordsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordsCountOutputType
     */
    select?: RecordsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecordsCountOutputType without action
   */
  export type RecordsCountOutputTypeCountProductListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type PurhasesCountOutputType
   */

  export type PurhasesCountOutputType = {
    products: number
  }

  export type PurhasesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | PurhasesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * PurhasesCountOutputType without action
   */
  export type PurhasesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurhasesCountOutputType
     */
    select?: PurhasesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurhasesCountOutputType without action
   */
  export type PurhasesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
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
    password: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
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
    password: string | null
    avatar: string | null
    createdAt: Date
    updatedAt: Date
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
    password?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Records?: boolean | User$RecordsArgs<ExtArgs>
    Purhases?: boolean | User$PurhasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "avatar" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Records?: boolean | User$RecordsArgs<ExtArgs>
    Purhases?: boolean | User$PurhasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Records: Prisma.$RecordsPayload<ExtArgs>[]
      Purhases: Prisma.$PurhasesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      password: string | null
      avatar: string | null
      createdAt: Date
      updatedAt: Date
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
    Records<T extends User$RecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$RecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Purhases<T extends User$PurhasesArgs<ExtArgs> = {}>(args?: Subset<T, User$PurhasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurhasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.Records
   */
  export type User$RecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    where?: RecordsWhereInput
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    cursor?: RecordsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordsScalarFieldEnum | RecordsScalarFieldEnum[]
  }

  /**
   * User.Purhases
   */
  export type User$PurhasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purhases
     */
    select?: PurhasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purhases
     */
    omit?: PurhasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurhasesInclude<ExtArgs> | null
    where?: PurhasesWhereInput
    orderBy?: PurhasesOrderByWithRelationInput | PurhasesOrderByWithRelationInput[]
    cursor?: PurhasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurhasesScalarFieldEnum | PurhasesScalarFieldEnum[]
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
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    slug_url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    slug_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    slug_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    slug_url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    slug_url: string
    createdAt: Date
    updatedAt: Date
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Products?: boolean | Categories$ProductsArgs<ExtArgs>
    config?: boolean | Categories$configArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    slug_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug_url" | "createdAt" | "updatedAt", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | Categories$ProductsArgs<ExtArgs>
    config?: boolean | Categories$configArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      Products: Prisma.$ProductsPayload<ExtArgs>[]
      config: Prisma.$configPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug_url: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Products<T extends Categories$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, Categories$ProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    config<T extends Categories$configArgs<ExtArgs> = {}>(args?: Subset<T, Categories$configArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'Int'>
    readonly name: FieldRef<"Categories", 'String'>
    readonly slug_url: FieldRef<"Categories", 'String'>
    readonly createdAt: FieldRef<"Categories", 'DateTime'>
    readonly updatedAt: FieldRef<"Categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.Products
   */
  export type Categories$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Categories.config
   */
  export type Categories$configArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the config
     */
    omit?: configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configInclude<ExtArgs> | null
    where?: configWhereInput
    orderBy?: configOrderByWithRelationInput | configOrderByWithRelationInput[]
    cursor?: configWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Suppliers
   */

  export type AggregateSuppliers = {
    _count: SuppliersCountAggregateOutputType | null
    _avg: SuppliersAvgAggregateOutputType | null
    _sum: SuppliersSumAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  export type SuppliersAvgAggregateOutputType = {
    id: number | null
  }

  export type SuppliersSumAggregateOutputType = {
    id: number | null
  }

  export type SuppliersMinAggregateOutputType = {
    id: number | null
    name: string | null
    company: string | null
    email: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    zip: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuppliersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    company: string | null
    email: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    zip: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuppliersCountAggregateOutputType = {
    id: number
    name: number
    company: number
    email: number
    address: number
    city: number
    state: number
    country: number
    zip: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SuppliersAvgAggregateInputType = {
    id?: true
  }

  export type SuppliersSumAggregateInputType = {
    id?: true
  }

  export type SuppliersMinAggregateInputType = {
    id?: true
    name?: true
    company?: true
    email?: true
    address?: true
    city?: true
    state?: true
    country?: true
    zip?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuppliersMaxAggregateInputType = {
    id?: true
    name?: true
    company?: true
    email?: true
    address?: true
    city?: true
    state?: true
    country?: true
    zip?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuppliersCountAggregateInputType = {
    id?: true
    name?: true
    company?: true
    email?: true
    address?: true
    city?: true
    state?: true
    country?: true
    zip?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SuppliersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to aggregate.
     */
    where?: SuppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SuppliersOrderByWithRelationInput | SuppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SuppliersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuppliersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuppliersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuppliersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuppliersMaxAggregateInputType
  }

  export type GetSuppliersAggregateType<T extends SuppliersAggregateArgs> = {
        [P in keyof T & keyof AggregateSuppliers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuppliers[P]>
      : GetScalarType<T[P], AggregateSuppliers[P]>
  }




  export type SuppliersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuppliersWhereInput
    orderBy?: SuppliersOrderByWithAggregationInput | SuppliersOrderByWithAggregationInput[]
    by: SuppliersScalarFieldEnum[] | SuppliersScalarFieldEnum
    having?: SuppliersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuppliersCountAggregateInputType | true
    _avg?: SuppliersAvgAggregateInputType
    _sum?: SuppliersSumAggregateInputType
    _min?: SuppliersMinAggregateInputType
    _max?: SuppliersMaxAggregateInputType
  }

  export type SuppliersGroupByOutputType = {
    id: number
    name: string
    company: string | null
    email: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    zip: string | null
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: SuppliersCountAggregateOutputType | null
    _avg: SuppliersAvgAggregateOutputType | null
    _sum: SuppliersSumAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  type GetSuppliersGroupByPayload<T extends SuppliersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuppliersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuppliersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
            : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
        }
      >
    >


  export type SuppliersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    company?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zip?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Products?: boolean | Suppliers$ProductsArgs<ExtArgs>
    _count?: boolean | SuppliersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suppliers"]>

  export type SuppliersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    company?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zip?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["suppliers"]>

  export type SuppliersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    company?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zip?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["suppliers"]>

  export type SuppliersSelectScalar = {
    id?: boolean
    name?: boolean
    company?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zip?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SuppliersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "company" | "email" | "address" | "city" | "state" | "country" | "zip" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["suppliers"]>
  export type SuppliersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | Suppliers$ProductsArgs<ExtArgs>
    _count?: boolean | SuppliersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SuppliersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SuppliersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SuppliersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Suppliers"
    objects: {
      Products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      company: string | null
      email: string | null
      address: string | null
      city: string | null
      state: string | null
      country: string | null
      zip: string | null
      phone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["suppliers"]>
    composites: {}
  }

  type SuppliersGetPayload<S extends boolean | null | undefined | SuppliersDefaultArgs> = $Result.GetResult<Prisma.$SuppliersPayload, S>

  type SuppliersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuppliersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuppliersCountAggregateInputType | true
    }

  export interface SuppliersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Suppliers'], meta: { name: 'Suppliers' } }
    /**
     * Find zero or one Suppliers that matches the filter.
     * @param {SuppliersFindUniqueArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuppliersFindUniqueArgs>(args: SelectSubset<T, SuppliersFindUniqueArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Suppliers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuppliersFindUniqueOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuppliersFindUniqueOrThrowArgs>(args: SelectSubset<T, SuppliersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersFindFirstArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuppliersFindFirstArgs>(args?: SelectSubset<T, SuppliersFindFirstArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suppliers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersFindFirstOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuppliersFindFirstOrThrowArgs>(args?: SelectSubset<T, SuppliersFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.suppliers.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.suppliers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suppliersWithIdOnly = await prisma.suppliers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuppliersFindManyArgs>(args?: SelectSubset<T, SuppliersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Suppliers.
     * @param {SuppliersCreateArgs} args - Arguments to create a Suppliers.
     * @example
     * // Create one Suppliers
     * const Suppliers = await prisma.suppliers.create({
     *   data: {
     *     // ... data to create a Suppliers
     *   }
     * })
     * 
     */
    create<T extends SuppliersCreateArgs>(args: SelectSubset<T, SuppliersCreateArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SuppliersCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const suppliers = await prisma.suppliers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuppliersCreateManyArgs>(args?: SelectSubset<T, SuppliersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SuppliersCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const suppliers = await prisma.suppliers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const suppliersWithIdOnly = await prisma.suppliers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuppliersCreateManyAndReturnArgs>(args?: SelectSubset<T, SuppliersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Suppliers.
     * @param {SuppliersDeleteArgs} args - Arguments to delete one Suppliers.
     * @example
     * // Delete one Suppliers
     * const Suppliers = await prisma.suppliers.delete({
     *   where: {
     *     // ... filter to delete one Suppliers
     *   }
     * })
     * 
     */
    delete<T extends SuppliersDeleteArgs>(args: SelectSubset<T, SuppliersDeleteArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Suppliers.
     * @param {SuppliersUpdateArgs} args - Arguments to update one Suppliers.
     * @example
     * // Update one Suppliers
     * const suppliers = await prisma.suppliers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuppliersUpdateArgs>(args: SelectSubset<T, SuppliersUpdateArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SuppliersDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.suppliers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuppliersDeleteManyArgs>(args?: SelectSubset<T, SuppliersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuppliersUpdateManyArgs>(args: SelectSubset<T, SuppliersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SuppliersUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const suppliersWithIdOnly = await prisma.suppliers.updateManyAndReturn({
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
    updateManyAndReturn<T extends SuppliersUpdateManyAndReturnArgs>(args: SelectSubset<T, SuppliersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Suppliers.
     * @param {SuppliersUpsertArgs} args - Arguments to update or create a Suppliers.
     * @example
     * // Update or create a Suppliers
     * const suppliers = await prisma.suppliers.upsert({
     *   create: {
     *     // ... data to create a Suppliers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suppliers we want to update
     *   }
     * })
     */
    upsert<T extends SuppliersUpsertArgs>(args: SelectSubset<T, SuppliersUpsertArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.suppliers.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SuppliersCountArgs>(
      args?: Subset<T, SuppliersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuppliersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuppliersAggregateArgs>(args: Subset<T, SuppliersAggregateArgs>): Prisma.PrismaPromise<GetSuppliersAggregateType<T>>

    /**
     * Group by Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersGroupByArgs} args - Group by arguments.
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
      T extends SuppliersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuppliersGroupByArgs['orderBy'] }
        : { orderBy?: SuppliersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuppliersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuppliersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Suppliers model
   */
  readonly fields: SuppliersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Suppliers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuppliersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Products<T extends Suppliers$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, Suppliers$ProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Suppliers model
   */
  interface SuppliersFieldRefs {
    readonly id: FieldRef<"Suppliers", 'Int'>
    readonly name: FieldRef<"Suppliers", 'String'>
    readonly company: FieldRef<"Suppliers", 'String'>
    readonly email: FieldRef<"Suppliers", 'String'>
    readonly address: FieldRef<"Suppliers", 'String'>
    readonly city: FieldRef<"Suppliers", 'String'>
    readonly state: FieldRef<"Suppliers", 'String'>
    readonly country: FieldRef<"Suppliers", 'String'>
    readonly zip: FieldRef<"Suppliers", 'String'>
    readonly phone: FieldRef<"Suppliers", 'String'>
    readonly createdAt: FieldRef<"Suppliers", 'DateTime'>
    readonly updatedAt: FieldRef<"Suppliers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Suppliers findUnique
   */
  export type SuppliersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where: SuppliersWhereUniqueInput
  }

  /**
   * Suppliers findUniqueOrThrow
   */
  export type SuppliersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where: SuppliersWhereUniqueInput
  }

  /**
   * Suppliers findFirst
   */
  export type SuppliersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SuppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SuppliersOrderByWithRelationInput | SuppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SuppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * Suppliers findFirstOrThrow
   */
  export type SuppliersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SuppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SuppliersOrderByWithRelationInput | SuppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SuppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * Suppliers findMany
   */
  export type SuppliersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SuppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SuppliersOrderByWithRelationInput | SuppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SuppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * Suppliers create
   */
  export type SuppliersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * The data needed to create a Suppliers.
     */
    data: XOR<SuppliersCreateInput, SuppliersUncheckedCreateInput>
  }

  /**
   * Suppliers createMany
   */
  export type SuppliersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SuppliersCreateManyInput | SuppliersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Suppliers createManyAndReturn
   */
  export type SuppliersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SuppliersCreateManyInput | SuppliersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Suppliers update
   */
  export type SuppliersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * The data needed to update a Suppliers.
     */
    data: XOR<SuppliersUpdateInput, SuppliersUncheckedUpdateInput>
    /**
     * Choose, which Suppliers to update.
     */
    where: SuppliersWhereUniqueInput
  }

  /**
   * Suppliers updateMany
   */
  export type SuppliersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SuppliersUpdateManyMutationInput, SuppliersUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SuppliersWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Suppliers updateManyAndReturn
   */
  export type SuppliersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SuppliersUpdateManyMutationInput, SuppliersUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SuppliersWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Suppliers upsert
   */
  export type SuppliersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * The filter to search for the Suppliers to update in case it exists.
     */
    where: SuppliersWhereUniqueInput
    /**
     * In case the Suppliers found by the `where` argument doesn't exist, create a new Suppliers with this data.
     */
    create: XOR<SuppliersCreateInput, SuppliersUncheckedCreateInput>
    /**
     * In case the Suppliers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuppliersUpdateInput, SuppliersUncheckedUpdateInput>
  }

  /**
   * Suppliers delete
   */
  export type SuppliersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * Filter which Suppliers to delete.
     */
    where: SuppliersWhereUniqueInput
  }

  /**
   * Suppliers deleteMany
   */
  export type SuppliersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SuppliersWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Suppliers.Products
   */
  export type Suppliers$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Suppliers without action
   */
  export type SuppliersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    stock: number | null
    price: number | null
    price_ent: number | null
    bundle: number | null
    supplier_id: number | null
    category_id: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    stock: number | null
    price: number | null
    price_ent: number | null
    bundle: number | null
    supplier_id: number | null
    category_id: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    name: string | null
    stock: number | null
    status: boolean | null
    price: number | null
    price_ent: number | null
    images: string | null
    Brand: string | null
    bundle: number | null
    expiration: Date | null
    unity: string | null
    supplier_id: number | null
    category_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    stock: number | null
    status: boolean | null
    price: number | null
    price_ent: number | null
    images: string | null
    Brand: string | null
    bundle: number | null
    expiration: Date | null
    unity: string | null
    supplier_id: number | null
    category_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    stock: number
    status: number
    price: number
    price_ent: number
    slugs: number
    slugs_url: number
    images: number
    Brand: number
    bundle: number
    expiration: number
    unity: number
    supplier_id: number
    category_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    stock?: true
    price?: true
    price_ent?: true
    bundle?: true
    supplier_id?: true
    category_id?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    stock?: true
    price?: true
    price_ent?: true
    bundle?: true
    supplier_id?: true
    category_id?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    stock?: true
    status?: true
    price?: true
    price_ent?: true
    images?: true
    Brand?: true
    bundle?: true
    expiration?: true
    unity?: true
    supplier_id?: true
    category_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    stock?: true
    status?: true
    price?: true
    price_ent?: true
    images?: true
    Brand?: true
    bundle?: true
    expiration?: true
    unity?: true
    supplier_id?: true
    category_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    stock?: true
    status?: true
    price?: true
    price_ent?: true
    slugs?: true
    slugs_url?: true
    images?: true
    Brand?: true
    bundle?: true
    expiration?: true
    unity?: true
    supplier_id?: true
    category_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    name: string
    stock: number
    status: boolean | null
    price: number
    price_ent: number
    slugs: string[]
    slugs_url: string[]
    images: string | null
    Brand: string | null
    bundle: number | null
    expiration: Date | null
    unity: string | null
    supplier_id: number | null
    category_id: number | null
    createdAt: Date
    updatedAt: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stock?: boolean
    status?: boolean
    price?: boolean
    price_ent?: boolean
    slugs?: boolean
    slugs_url?: boolean
    images?: boolean
    Brand?: boolean
    bundle?: boolean
    expiration?: boolean
    unity?: boolean
    supplier_id?: boolean
    category_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | Products$supplierArgs<ExtArgs>
    Categories?: boolean | Products$CategoriesArgs<ExtArgs>
    Records?: boolean | Products$RecordsArgs<ExtArgs>
    Purhases?: boolean | Products$PurhasesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stock?: boolean
    status?: boolean
    price?: boolean
    price_ent?: boolean
    slugs?: boolean
    slugs_url?: boolean
    images?: boolean
    Brand?: boolean
    bundle?: boolean
    expiration?: boolean
    unity?: boolean
    supplier_id?: boolean
    category_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | Products$supplierArgs<ExtArgs>
    Categories?: boolean | Products$CategoriesArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stock?: boolean
    status?: boolean
    price?: boolean
    price_ent?: boolean
    slugs?: boolean
    slugs_url?: boolean
    images?: boolean
    Brand?: boolean
    bundle?: boolean
    expiration?: boolean
    unity?: boolean
    supplier_id?: boolean
    category_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | Products$supplierArgs<ExtArgs>
    Categories?: boolean | Products$CategoriesArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    id?: boolean
    name?: boolean
    stock?: boolean
    status?: boolean
    price?: boolean
    price_ent?: boolean
    slugs?: boolean
    slugs_url?: boolean
    images?: boolean
    Brand?: boolean
    bundle?: boolean
    expiration?: boolean
    unity?: boolean
    supplier_id?: boolean
    category_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "stock" | "status" | "price" | "price_ent" | "slugs" | "slugs_url" | "images" | "Brand" | "bundle" | "expiration" | "unity" | "supplier_id" | "category_id" | "createdAt" | "updatedAt", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | Products$supplierArgs<ExtArgs>
    Categories?: boolean | Products$CategoriesArgs<ExtArgs>
    Records?: boolean | Products$RecordsArgs<ExtArgs>
    Purhases?: boolean | Products$PurhasesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | Products$supplierArgs<ExtArgs>
    Categories?: boolean | Products$CategoriesArgs<ExtArgs>
  }
  export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | Products$supplierArgs<ExtArgs>
    Categories?: boolean | Products$CategoriesArgs<ExtArgs>
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      supplier: Prisma.$SuppliersPayload<ExtArgs> | null
      Categories: Prisma.$CategoriesPayload<ExtArgs> | null
      Records: Prisma.$RecordsPayload<ExtArgs>[]
      Purhases: Prisma.$PurhasesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      stock: number
      status: boolean | null
      price: number
      price_ent: number
      slugs: string[]
      slugs_url: string[]
      images: string | null
      Brand: string | null
      bundle: number | null
      expiration: Date | null
      unity: string | null
      supplier_id: number | null
      category_id: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
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
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends Products$supplierArgs<ExtArgs> = {}>(args?: Subset<T, Products$supplierArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Categories<T extends Products$CategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Products$CategoriesArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Records<T extends Products$RecordsArgs<ExtArgs> = {}>(args?: Subset<T, Products$RecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Purhases<T extends Products$PurhasesArgs<ExtArgs> = {}>(args?: Subset<T, Products$PurhasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurhasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly id: FieldRef<"Products", 'Int'>
    readonly name: FieldRef<"Products", 'String'>
    readonly stock: FieldRef<"Products", 'Int'>
    readonly status: FieldRef<"Products", 'Boolean'>
    readonly price: FieldRef<"Products", 'Float'>
    readonly price_ent: FieldRef<"Products", 'Float'>
    readonly slugs: FieldRef<"Products", 'String[]'>
    readonly slugs_url: FieldRef<"Products", 'String[]'>
    readonly images: FieldRef<"Products", 'String'>
    readonly Brand: FieldRef<"Products", 'String'>
    readonly bundle: FieldRef<"Products", 'Int'>
    readonly expiration: FieldRef<"Products", 'DateTime'>
    readonly unity: FieldRef<"Products", 'String'>
    readonly supplier_id: FieldRef<"Products", 'Int'>
    readonly category_id: FieldRef<"Products", 'Int'>
    readonly createdAt: FieldRef<"Products", 'DateTime'>
    readonly updatedAt: FieldRef<"Products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.supplier
   */
  export type Products$supplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    where?: SuppliersWhereInput
  }

  /**
   * Products.Categories
   */
  export type Products$CategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    where?: CategoriesWhereInput
  }

  /**
   * Products.Records
   */
  export type Products$RecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    where?: RecordsWhereInput
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    cursor?: RecordsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordsScalarFieldEnum | RecordsScalarFieldEnum[]
  }

  /**
   * Products.Purhases
   */
  export type Products$PurhasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purhases
     */
    select?: PurhasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purhases
     */
    omit?: PurhasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurhasesInclude<ExtArgs> | null
    where?: PurhasesWhereInput
    orderBy?: PurhasesOrderByWithRelationInput | PurhasesOrderByWithRelationInput[]
    cursor?: PurhasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurhasesScalarFieldEnum | PurhasesScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model Records
   */

  export type AggregateRecords = {
    _count: RecordsCountAggregateOutputType | null
    _avg: RecordsAvgAggregateOutputType | null
    _sum: RecordsSumAggregateOutputType | null
    _min: RecordsMinAggregateOutputType | null
    _max: RecordsMaxAggregateOutputType | null
  }

  export type RecordsAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type RecordsSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type RecordsMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    product_id: number | null
    quantity: number | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecordsMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    product_id: number | null
    quantity: number | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecordsCountAggregateOutputType = {
    id: number
    user_id: number
    product_id: number
    quantity: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecordsAvgAggregateInputType = {
    id?: true
    product_id?: true
    quantity?: true
  }

  export type RecordsSumAggregateInputType = {
    id?: true
    product_id?: true
    quantity?: true
  }

  export type RecordsMinAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    quantity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecordsMaxAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    quantity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecordsCountAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    quantity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecordsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Records to aggregate.
     */
    where?: RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Records
    **/
    _count?: true | RecordsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecordsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecordsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecordsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecordsMaxAggregateInputType
  }

  export type GetRecordsAggregateType<T extends RecordsAggregateArgs> = {
        [P in keyof T & keyof AggregateRecords]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecords[P]>
      : GetScalarType<T[P], AggregateRecords[P]>
  }




  export type RecordsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordsWhereInput
    orderBy?: RecordsOrderByWithAggregationInput | RecordsOrderByWithAggregationInput[]
    by: RecordsScalarFieldEnum[] | RecordsScalarFieldEnum
    having?: RecordsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecordsCountAggregateInputType | true
    _avg?: RecordsAvgAggregateInputType
    _sum?: RecordsSumAggregateInputType
    _min?: RecordsMinAggregateInputType
    _max?: RecordsMaxAggregateInputType
  }

  export type RecordsGroupByOutputType = {
    id: number
    user_id: string | null
    product_id: number | null
    quantity: number
    status: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: RecordsCountAggregateOutputType | null
    _avg: RecordsAvgAggregateOutputType | null
    _sum: RecordsSumAggregateOutputType | null
    _min: RecordsMinAggregateOutputType | null
    _max: RecordsMaxAggregateOutputType | null
  }

  type GetRecordsGroupByPayload<T extends RecordsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecordsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecordsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordsGroupByOutputType[P]>
            : GetScalarType<T[P], RecordsGroupByOutputType[P]>
        }
      >
    >


  export type RecordsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    product_id?: boolean
    quantity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productList?: boolean | Records$productListArgs<ExtArgs>
    User?: boolean | Records$UserArgs<ExtArgs>
    _count?: boolean | RecordsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["records"]>

  export type RecordsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    product_id?: boolean
    quantity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | Records$UserArgs<ExtArgs>
  }, ExtArgs["result"]["records"]>

  export type RecordsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    product_id?: boolean
    quantity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | Records$UserArgs<ExtArgs>
  }, ExtArgs["result"]["records"]>

  export type RecordsSelectScalar = {
    id?: boolean
    user_id?: boolean
    product_id?: boolean
    quantity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecordsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "product_id" | "quantity" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["records"]>
  export type RecordsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productList?: boolean | Records$productListArgs<ExtArgs>
    User?: boolean | Records$UserArgs<ExtArgs>
    _count?: boolean | RecordsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecordsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Records$UserArgs<ExtArgs>
  }
  export type RecordsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Records$UserArgs<ExtArgs>
  }

  export type $RecordsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Records"
    objects: {
      productList: Prisma.$ProductsPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string | null
      product_id: number | null
      quantity: number
      status: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["records"]>
    composites: {}
  }

  type RecordsGetPayload<S extends boolean | null | undefined | RecordsDefaultArgs> = $Result.GetResult<Prisma.$RecordsPayload, S>

  type RecordsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecordsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecordsCountAggregateInputType | true
    }

  export interface RecordsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Records'], meta: { name: 'Records' } }
    /**
     * Find zero or one Records that matches the filter.
     * @param {RecordsFindUniqueArgs} args - Arguments to find a Records
     * @example
     * // Get one Records
     * const records = await prisma.records.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecordsFindUniqueArgs>(args: SelectSubset<T, RecordsFindUniqueArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Records that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecordsFindUniqueOrThrowArgs} args - Arguments to find a Records
     * @example
     * // Get one Records
     * const records = await prisma.records.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecordsFindUniqueOrThrowArgs>(args: SelectSubset<T, RecordsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsFindFirstArgs} args - Arguments to find a Records
     * @example
     * // Get one Records
     * const records = await prisma.records.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecordsFindFirstArgs>(args?: SelectSubset<T, RecordsFindFirstArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Records that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsFindFirstOrThrowArgs} args - Arguments to find a Records
     * @example
     * // Get one Records
     * const records = await prisma.records.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecordsFindFirstOrThrowArgs>(args?: SelectSubset<T, RecordsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Records
     * const records = await prisma.records.findMany()
     * 
     * // Get first 10 Records
     * const records = await prisma.records.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recordsWithIdOnly = await prisma.records.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecordsFindManyArgs>(args?: SelectSubset<T, RecordsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Records.
     * @param {RecordsCreateArgs} args - Arguments to create a Records.
     * @example
     * // Create one Records
     * const Records = await prisma.records.create({
     *   data: {
     *     // ... data to create a Records
     *   }
     * })
     * 
     */
    create<T extends RecordsCreateArgs>(args: SelectSubset<T, RecordsCreateArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Records.
     * @param {RecordsCreateManyArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const records = await prisma.records.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecordsCreateManyArgs>(args?: SelectSubset<T, RecordsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Records and returns the data saved in the database.
     * @param {RecordsCreateManyAndReturnArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const records = await prisma.records.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Records and only return the `id`
     * const recordsWithIdOnly = await prisma.records.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecordsCreateManyAndReturnArgs>(args?: SelectSubset<T, RecordsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Records.
     * @param {RecordsDeleteArgs} args - Arguments to delete one Records.
     * @example
     * // Delete one Records
     * const Records = await prisma.records.delete({
     *   where: {
     *     // ... filter to delete one Records
     *   }
     * })
     * 
     */
    delete<T extends RecordsDeleteArgs>(args: SelectSubset<T, RecordsDeleteArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Records.
     * @param {RecordsUpdateArgs} args - Arguments to update one Records.
     * @example
     * // Update one Records
     * const records = await prisma.records.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecordsUpdateArgs>(args: SelectSubset<T, RecordsUpdateArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Records.
     * @param {RecordsDeleteManyArgs} args - Arguments to filter Records to delete.
     * @example
     * // Delete a few Records
     * const { count } = await prisma.records.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecordsDeleteManyArgs>(args?: SelectSubset<T, RecordsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Records
     * const records = await prisma.records.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecordsUpdateManyArgs>(args: SelectSubset<T, RecordsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records and returns the data updated in the database.
     * @param {RecordsUpdateManyAndReturnArgs} args - Arguments to update many Records.
     * @example
     * // Update many Records
     * const records = await prisma.records.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Records and only return the `id`
     * const recordsWithIdOnly = await prisma.records.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecordsUpdateManyAndReturnArgs>(args: SelectSubset<T, RecordsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Records.
     * @param {RecordsUpsertArgs} args - Arguments to update or create a Records.
     * @example
     * // Update or create a Records
     * const records = await prisma.records.upsert({
     *   create: {
     *     // ... data to create a Records
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Records we want to update
     *   }
     * })
     */
    upsert<T extends RecordsUpsertArgs>(args: SelectSubset<T, RecordsUpsertArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsCountArgs} args - Arguments to filter Records to count.
     * @example
     * // Count the number of Records
     * const count = await prisma.records.count({
     *   where: {
     *     // ... the filter for the Records we want to count
     *   }
     * })
    **/
    count<T extends RecordsCountArgs>(
      args?: Subset<T, RecordsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecordsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecordsAggregateArgs>(args: Subset<T, RecordsAggregateArgs>): Prisma.PrismaPromise<GetRecordsAggregateType<T>>

    /**
     * Group by Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsGroupByArgs} args - Group by arguments.
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
      T extends RecordsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordsGroupByArgs['orderBy'] }
        : { orderBy?: RecordsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecordsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecordsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Records model
   */
  readonly fields: RecordsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Records.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecordsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productList<T extends Records$productListArgs<ExtArgs> = {}>(args?: Subset<T, Records$productListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Records$UserArgs<ExtArgs> = {}>(args?: Subset<T, Records$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Records model
   */
  interface RecordsFieldRefs {
    readonly id: FieldRef<"Records", 'Int'>
    readonly user_id: FieldRef<"Records", 'String'>
    readonly product_id: FieldRef<"Records", 'Int'>
    readonly quantity: FieldRef<"Records", 'Int'>
    readonly status: FieldRef<"Records", 'Boolean'>
    readonly createdAt: FieldRef<"Records", 'DateTime'>
    readonly updatedAt: FieldRef<"Records", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Records findUnique
   */
  export type RecordsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where: RecordsWhereUniqueInput
  }

  /**
   * Records findUniqueOrThrow
   */
  export type RecordsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where: RecordsWhereUniqueInput
  }

  /**
   * Records findFirst
   */
  export type RecordsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordsScalarFieldEnum | RecordsScalarFieldEnum[]
  }

  /**
   * Records findFirstOrThrow
   */
  export type RecordsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordsScalarFieldEnum | RecordsScalarFieldEnum[]
  }

  /**
   * Records findMany
   */
  export type RecordsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Records.
     */
    cursor?: RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    distinct?: RecordsScalarFieldEnum | RecordsScalarFieldEnum[]
  }

  /**
   * Records create
   */
  export type RecordsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * The data needed to create a Records.
     */
    data: XOR<RecordsCreateInput, RecordsUncheckedCreateInput>
  }

  /**
   * Records createMany
   */
  export type RecordsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Records.
     */
    data: RecordsCreateManyInput | RecordsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Records createManyAndReturn
   */
  export type RecordsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * The data used to create many Records.
     */
    data: RecordsCreateManyInput | RecordsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Records update
   */
  export type RecordsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * The data needed to update a Records.
     */
    data: XOR<RecordsUpdateInput, RecordsUncheckedUpdateInput>
    /**
     * Choose, which Records to update.
     */
    where: RecordsWhereUniqueInput
  }

  /**
   * Records updateMany
   */
  export type RecordsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Records.
     */
    data: XOR<RecordsUpdateManyMutationInput, RecordsUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     */
    where?: RecordsWhereInput
    /**
     * Limit how many Records to update.
     */
    limit?: number
  }

  /**
   * Records updateManyAndReturn
   */
  export type RecordsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * The data used to update Records.
     */
    data: XOR<RecordsUpdateManyMutationInput, RecordsUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     */
    where?: RecordsWhereInput
    /**
     * Limit how many Records to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Records upsert
   */
  export type RecordsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * The filter to search for the Records to update in case it exists.
     */
    where: RecordsWhereUniqueInput
    /**
     * In case the Records found by the `where` argument doesn't exist, create a new Records with this data.
     */
    create: XOR<RecordsCreateInput, RecordsUncheckedCreateInput>
    /**
     * In case the Records was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecordsUpdateInput, RecordsUncheckedUpdateInput>
  }

  /**
   * Records delete
   */
  export type RecordsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * Filter which Records to delete.
     */
    where: RecordsWhereUniqueInput
  }

  /**
   * Records deleteMany
   */
  export type RecordsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Records to delete
     */
    where?: RecordsWhereInput
    /**
     * Limit how many Records to delete.
     */
    limit?: number
  }

  /**
   * Records.productList
   */
  export type Records$productListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Records.User
   */
  export type Records$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Records without action
   */
  export type RecordsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
  }


  /**
   * Model Purhases
   */

  export type AggregatePurhases = {
    _count: PurhasesCountAggregateOutputType | null
    _avg: PurhasesAvgAggregateOutputType | null
    _sum: PurhasesSumAggregateOutputType | null
    _min: PurhasesMinAggregateOutputType | null
    _max: PurhasesMaxAggregateOutputType | null
  }

  export type PurhasesAvgAggregateOutputType = {
    id: number | null
    total_purchase_amout: number | null
    dolar_amout: number | null
    date_credit: number | null
    quantity: number | null
  }

  export type PurhasesSumAggregateOutputType = {
    id: number | null
    total_purchase_amout: number[]
    dolar_amout: number | null
    date_credit: number | null
    quantity: number | null
  }

  export type PurhasesMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    dolar_amout: number | null
    date_credit: number | null
    reference: string | null
    quantity: number | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurhasesMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    dolar_amout: number | null
    date_credit: number | null
    reference: string | null
    quantity: number | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurhasesCountAggregateOutputType = {
    id: number
    user_id: number
    total_purchase_amout: number
    dolar_amout: number
    date_credit: number
    reference: number
    quantity: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PurhasesAvgAggregateInputType = {
    id?: true
    total_purchase_amout?: true
    dolar_amout?: true
    date_credit?: true
    quantity?: true
  }

  export type PurhasesSumAggregateInputType = {
    id?: true
    total_purchase_amout?: true
    dolar_amout?: true
    date_credit?: true
    quantity?: true
  }

  export type PurhasesMinAggregateInputType = {
    id?: true
    user_id?: true
    dolar_amout?: true
    date_credit?: true
    reference?: true
    quantity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurhasesMaxAggregateInputType = {
    id?: true
    user_id?: true
    dolar_amout?: true
    date_credit?: true
    reference?: true
    quantity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurhasesCountAggregateInputType = {
    id?: true
    user_id?: true
    total_purchase_amout?: true
    dolar_amout?: true
    date_credit?: true
    reference?: true
    quantity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PurhasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purhases to aggregate.
     */
    where?: PurhasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purhases to fetch.
     */
    orderBy?: PurhasesOrderByWithRelationInput | PurhasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurhasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purhases
    **/
    _count?: true | PurhasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurhasesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurhasesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurhasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurhasesMaxAggregateInputType
  }

  export type GetPurhasesAggregateType<T extends PurhasesAggregateArgs> = {
        [P in keyof T & keyof AggregatePurhases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurhases[P]>
      : GetScalarType<T[P], AggregatePurhases[P]>
  }




  export type PurhasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurhasesWhereInput
    orderBy?: PurhasesOrderByWithAggregationInput | PurhasesOrderByWithAggregationInput[]
    by: PurhasesScalarFieldEnum[] | PurhasesScalarFieldEnum
    having?: PurhasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurhasesCountAggregateInputType | true
    _avg?: PurhasesAvgAggregateInputType
    _sum?: PurhasesSumAggregateInputType
    _min?: PurhasesMinAggregateInputType
    _max?: PurhasesMaxAggregateInputType
  }

  export type PurhasesGroupByOutputType = {
    id: number
    user_id: string | null
    total_purchase_amout: number[]
    dolar_amout: number | null
    date_credit: number | null
    reference: string | null
    quantity: number
    status: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: PurhasesCountAggregateOutputType | null
    _avg: PurhasesAvgAggregateOutputType | null
    _sum: PurhasesSumAggregateOutputType | null
    _min: PurhasesMinAggregateOutputType | null
    _max: PurhasesMaxAggregateOutputType | null
  }

  type GetPurhasesGroupByPayload<T extends PurhasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurhasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurhasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurhasesGroupByOutputType[P]>
            : GetScalarType<T[P], PurhasesGroupByOutputType[P]>
        }
      >
    >


  export type PurhasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total_purchase_amout?: boolean
    dolar_amout?: boolean
    date_credit?: boolean
    reference?: boolean
    quantity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | Purhases$productsArgs<ExtArgs>
    User?: boolean | Purhases$UserArgs<ExtArgs>
    _count?: boolean | PurhasesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purhases"]>

  export type PurhasesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total_purchase_amout?: boolean
    dolar_amout?: boolean
    date_credit?: boolean
    reference?: boolean
    quantity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | Purhases$UserArgs<ExtArgs>
  }, ExtArgs["result"]["purhases"]>

  export type PurhasesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total_purchase_amout?: boolean
    dolar_amout?: boolean
    date_credit?: boolean
    reference?: boolean
    quantity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | Purhases$UserArgs<ExtArgs>
  }, ExtArgs["result"]["purhases"]>

  export type PurhasesSelectScalar = {
    id?: boolean
    user_id?: boolean
    total_purchase_amout?: boolean
    dolar_amout?: boolean
    date_credit?: boolean
    reference?: boolean
    quantity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PurhasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "total_purchase_amout" | "dolar_amout" | "date_credit" | "reference" | "quantity" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["purhases"]>
  export type PurhasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Purhases$productsArgs<ExtArgs>
    User?: boolean | Purhases$UserArgs<ExtArgs>
    _count?: boolean | PurhasesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurhasesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Purhases$UserArgs<ExtArgs>
  }
  export type PurhasesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Purhases$UserArgs<ExtArgs>
  }

  export type $PurhasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purhases"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string | null
      total_purchase_amout: number[]
      dolar_amout: number | null
      date_credit: number | null
      reference: string | null
      quantity: number
      status: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["purhases"]>
    composites: {}
  }

  type PurhasesGetPayload<S extends boolean | null | undefined | PurhasesDefaultArgs> = $Result.GetResult<Prisma.$PurhasesPayload, S>

  type PurhasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurhasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurhasesCountAggregateInputType | true
    }

  export interface PurhasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purhases'], meta: { name: 'Purhases' } }
    /**
     * Find zero or one Purhases that matches the filter.
     * @param {PurhasesFindUniqueArgs} args - Arguments to find a Purhases
     * @example
     * // Get one Purhases
     * const purhases = await prisma.purhases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurhasesFindUniqueArgs>(args: SelectSubset<T, PurhasesFindUniqueArgs<ExtArgs>>): Prisma__PurhasesClient<$Result.GetResult<Prisma.$PurhasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purhases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurhasesFindUniqueOrThrowArgs} args - Arguments to find a Purhases
     * @example
     * // Get one Purhases
     * const purhases = await prisma.purhases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurhasesFindUniqueOrThrowArgs>(args: SelectSubset<T, PurhasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurhasesClient<$Result.GetResult<Prisma.$PurhasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purhases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurhasesFindFirstArgs} args - Arguments to find a Purhases
     * @example
     * // Get one Purhases
     * const purhases = await prisma.purhases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurhasesFindFirstArgs>(args?: SelectSubset<T, PurhasesFindFirstArgs<ExtArgs>>): Prisma__PurhasesClient<$Result.GetResult<Prisma.$PurhasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purhases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurhasesFindFirstOrThrowArgs} args - Arguments to find a Purhases
     * @example
     * // Get one Purhases
     * const purhases = await prisma.purhases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurhasesFindFirstOrThrowArgs>(args?: SelectSubset<T, PurhasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurhasesClient<$Result.GetResult<Prisma.$PurhasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purhases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurhasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purhases
     * const purhases = await prisma.purhases.findMany()
     * 
     * // Get first 10 Purhases
     * const purhases = await prisma.purhases.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purhasesWithIdOnly = await prisma.purhases.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurhasesFindManyArgs>(args?: SelectSubset<T, PurhasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurhasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purhases.
     * @param {PurhasesCreateArgs} args - Arguments to create a Purhases.
     * @example
     * // Create one Purhases
     * const Purhases = await prisma.purhases.create({
     *   data: {
     *     // ... data to create a Purhases
     *   }
     * })
     * 
     */
    create<T extends PurhasesCreateArgs>(args: SelectSubset<T, PurhasesCreateArgs<ExtArgs>>): Prisma__PurhasesClient<$Result.GetResult<Prisma.$PurhasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purhases.
     * @param {PurhasesCreateManyArgs} args - Arguments to create many Purhases.
     * @example
     * // Create many Purhases
     * const purhases = await prisma.purhases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurhasesCreateManyArgs>(args?: SelectSubset<T, PurhasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purhases and returns the data saved in the database.
     * @param {PurhasesCreateManyAndReturnArgs} args - Arguments to create many Purhases.
     * @example
     * // Create many Purhases
     * const purhases = await prisma.purhases.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purhases and only return the `id`
     * const purhasesWithIdOnly = await prisma.purhases.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurhasesCreateManyAndReturnArgs>(args?: SelectSubset<T, PurhasesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurhasesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purhases.
     * @param {PurhasesDeleteArgs} args - Arguments to delete one Purhases.
     * @example
     * // Delete one Purhases
     * const Purhases = await prisma.purhases.delete({
     *   where: {
     *     // ... filter to delete one Purhases
     *   }
     * })
     * 
     */
    delete<T extends PurhasesDeleteArgs>(args: SelectSubset<T, PurhasesDeleteArgs<ExtArgs>>): Prisma__PurhasesClient<$Result.GetResult<Prisma.$PurhasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purhases.
     * @param {PurhasesUpdateArgs} args - Arguments to update one Purhases.
     * @example
     * // Update one Purhases
     * const purhases = await prisma.purhases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurhasesUpdateArgs>(args: SelectSubset<T, PurhasesUpdateArgs<ExtArgs>>): Prisma__PurhasesClient<$Result.GetResult<Prisma.$PurhasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purhases.
     * @param {PurhasesDeleteManyArgs} args - Arguments to filter Purhases to delete.
     * @example
     * // Delete a few Purhases
     * const { count } = await prisma.purhases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurhasesDeleteManyArgs>(args?: SelectSubset<T, PurhasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurhasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purhases
     * const purhases = await prisma.purhases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurhasesUpdateManyArgs>(args: SelectSubset<T, PurhasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purhases and returns the data updated in the database.
     * @param {PurhasesUpdateManyAndReturnArgs} args - Arguments to update many Purhases.
     * @example
     * // Update many Purhases
     * const purhases = await prisma.purhases.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purhases and only return the `id`
     * const purhasesWithIdOnly = await prisma.purhases.updateManyAndReturn({
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
    updateManyAndReturn<T extends PurhasesUpdateManyAndReturnArgs>(args: SelectSubset<T, PurhasesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurhasesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purhases.
     * @param {PurhasesUpsertArgs} args - Arguments to update or create a Purhases.
     * @example
     * // Update or create a Purhases
     * const purhases = await prisma.purhases.upsert({
     *   create: {
     *     // ... data to create a Purhases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purhases we want to update
     *   }
     * })
     */
    upsert<T extends PurhasesUpsertArgs>(args: SelectSubset<T, PurhasesUpsertArgs<ExtArgs>>): Prisma__PurhasesClient<$Result.GetResult<Prisma.$PurhasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurhasesCountArgs} args - Arguments to filter Purhases to count.
     * @example
     * // Count the number of Purhases
     * const count = await prisma.purhases.count({
     *   where: {
     *     // ... the filter for the Purhases we want to count
     *   }
     * })
    **/
    count<T extends PurhasesCountArgs>(
      args?: Subset<T, PurhasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurhasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurhasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurhasesAggregateArgs>(args: Subset<T, PurhasesAggregateArgs>): Prisma.PrismaPromise<GetPurhasesAggregateType<T>>

    /**
     * Group by Purhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurhasesGroupByArgs} args - Group by arguments.
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
      T extends PurhasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurhasesGroupByArgs['orderBy'] }
        : { orderBy?: PurhasesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurhasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurhasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purhases model
   */
  readonly fields: PurhasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purhases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurhasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Purhases$productsArgs<ExtArgs> = {}>(args?: Subset<T, Purhases$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Purhases$UserArgs<ExtArgs> = {}>(args?: Subset<T, Purhases$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Purhases model
   */
  interface PurhasesFieldRefs {
    readonly id: FieldRef<"Purhases", 'Int'>
    readonly user_id: FieldRef<"Purhases", 'String'>
    readonly total_purchase_amout: FieldRef<"Purhases", 'Float[]'>
    readonly dolar_amout: FieldRef<"Purhases", 'Float'>
    readonly date_credit: FieldRef<"Purhases", 'Int'>
    readonly reference: FieldRef<"Purhases", 'String'>
    readonly quantity: FieldRef<"Purhases", 'Int'>
    readonly status: FieldRef<"Purhases", 'Boolean'>
    readonly createdAt: FieldRef<"Purhases", 'DateTime'>
    readonly updatedAt: FieldRef<"Purhases", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Purhases findUnique
   */
  export type PurhasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purhases
     */
    select?: PurhasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purhases
     */
    omit?: PurhasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurhasesInclude<ExtArgs> | null
    /**
     * Filter, which Purhases to fetch.
     */
    where: PurhasesWhereUniqueInput
  }

  /**
   * Purhases findUniqueOrThrow
   */
  export type PurhasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purhases
     */
    select?: PurhasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purhases
     */
    omit?: PurhasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurhasesInclude<ExtArgs> | null
    /**
     * Filter, which Purhases to fetch.
     */
    where: PurhasesWhereUniqueInput
  }

  /**
   * Purhases findFirst
   */
  export type PurhasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purhases
     */
    select?: PurhasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purhases
     */
    omit?: PurhasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurhasesInclude<ExtArgs> | null
    /**
     * Filter, which Purhases to fetch.
     */
    where?: PurhasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purhases to fetch.
     */
    orderBy?: PurhasesOrderByWithRelationInput | PurhasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purhases.
     */
    cursor?: PurhasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purhases.
     */
    distinct?: PurhasesScalarFieldEnum | PurhasesScalarFieldEnum[]
  }

  /**
   * Purhases findFirstOrThrow
   */
  export type PurhasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purhases
     */
    select?: PurhasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purhases
     */
    omit?: PurhasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurhasesInclude<ExtArgs> | null
    /**
     * Filter, which Purhases to fetch.
     */
    where?: PurhasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purhases to fetch.
     */
    orderBy?: PurhasesOrderByWithRelationInput | PurhasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purhases.
     */
    cursor?: PurhasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purhases.
     */
    distinct?: PurhasesScalarFieldEnum | PurhasesScalarFieldEnum[]
  }

  /**
   * Purhases findMany
   */
  export type PurhasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purhases
     */
    select?: PurhasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purhases
     */
    omit?: PurhasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurhasesInclude<ExtArgs> | null
    /**
     * Filter, which Purhases to fetch.
     */
    where?: PurhasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purhases to fetch.
     */
    orderBy?: PurhasesOrderByWithRelationInput | PurhasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purhases.
     */
    cursor?: PurhasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purhases.
     */
    skip?: number
    distinct?: PurhasesScalarFieldEnum | PurhasesScalarFieldEnum[]
  }

  /**
   * Purhases create
   */
  export type PurhasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purhases
     */
    select?: PurhasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purhases
     */
    omit?: PurhasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurhasesInclude<ExtArgs> | null
    /**
     * The data needed to create a Purhases.
     */
    data: XOR<PurhasesCreateInput, PurhasesUncheckedCreateInput>
  }

  /**
   * Purhases createMany
   */
  export type PurhasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purhases.
     */
    data: PurhasesCreateManyInput | PurhasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purhases createManyAndReturn
   */
  export type PurhasesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purhases
     */
    select?: PurhasesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purhases
     */
    omit?: PurhasesOmit<ExtArgs> | null
    /**
     * The data used to create many Purhases.
     */
    data: PurhasesCreateManyInput | PurhasesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurhasesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purhases update
   */
  export type PurhasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purhases
     */
    select?: PurhasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purhases
     */
    omit?: PurhasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurhasesInclude<ExtArgs> | null
    /**
     * The data needed to update a Purhases.
     */
    data: XOR<PurhasesUpdateInput, PurhasesUncheckedUpdateInput>
    /**
     * Choose, which Purhases to update.
     */
    where: PurhasesWhereUniqueInput
  }

  /**
   * Purhases updateMany
   */
  export type PurhasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purhases.
     */
    data: XOR<PurhasesUpdateManyMutationInput, PurhasesUncheckedUpdateManyInput>
    /**
     * Filter which Purhases to update
     */
    where?: PurhasesWhereInput
    /**
     * Limit how many Purhases to update.
     */
    limit?: number
  }

  /**
   * Purhases updateManyAndReturn
   */
  export type PurhasesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purhases
     */
    select?: PurhasesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purhases
     */
    omit?: PurhasesOmit<ExtArgs> | null
    /**
     * The data used to update Purhases.
     */
    data: XOR<PurhasesUpdateManyMutationInput, PurhasesUncheckedUpdateManyInput>
    /**
     * Filter which Purhases to update
     */
    where?: PurhasesWhereInput
    /**
     * Limit how many Purhases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurhasesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purhases upsert
   */
  export type PurhasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purhases
     */
    select?: PurhasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purhases
     */
    omit?: PurhasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurhasesInclude<ExtArgs> | null
    /**
     * The filter to search for the Purhases to update in case it exists.
     */
    where: PurhasesWhereUniqueInput
    /**
     * In case the Purhases found by the `where` argument doesn't exist, create a new Purhases with this data.
     */
    create: XOR<PurhasesCreateInput, PurhasesUncheckedCreateInput>
    /**
     * In case the Purhases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurhasesUpdateInput, PurhasesUncheckedUpdateInput>
  }

  /**
   * Purhases delete
   */
  export type PurhasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purhases
     */
    select?: PurhasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purhases
     */
    omit?: PurhasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurhasesInclude<ExtArgs> | null
    /**
     * Filter which Purhases to delete.
     */
    where: PurhasesWhereUniqueInput
  }

  /**
   * Purhases deleteMany
   */
  export type PurhasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purhases to delete
     */
    where?: PurhasesWhereInput
    /**
     * Limit how many Purhases to delete.
     */
    limit?: number
  }

  /**
   * Purhases.products
   */
  export type Purhases$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Purhases.User
   */
  export type Purhases$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Purhases without action
   */
  export type PurhasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purhases
     */
    select?: PurhasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purhases
     */
    omit?: PurhasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurhasesInclude<ExtArgs> | null
  }


  /**
   * Model config
   */

  export type AggregateConfig = {
    _count: ConfigCountAggregateOutputType | null
    _avg: ConfigAvgAggregateOutputType | null
    _sum: ConfigSumAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  export type ConfigAvgAggregateOutputType = {
    id: number | null
    dolar: number | null
    profit: number | null
    default_categories_id: number | null
    threshold: number | null
    expiration_default: number | null
    bundle_discount: number | null
  }

  export type ConfigSumAggregateOutputType = {
    id: number | null
    dolar: number | null
    profit: number | null
    default_categories_id: number | null
    threshold: number | null
    expiration_default: number | null
    bundle_discount: number | null
  }

  export type ConfigMinAggregateOutputType = {
    id: number | null
    dolar: number | null
    useIva: boolean | null
    autoPrice: boolean | null
    profit: number | null
    roundPrice: boolean | null
    default_categories_id: number | null
    threshold: number | null
    defafult_currency: string | null
    expiration_default: number | null
    bundle_discount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfigMaxAggregateOutputType = {
    id: number | null
    dolar: number | null
    useIva: boolean | null
    autoPrice: boolean | null
    profit: number | null
    roundPrice: boolean | null
    default_categories_id: number | null
    threshold: number | null
    defafult_currency: string | null
    expiration_default: number | null
    bundle_discount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfigCountAggregateOutputType = {
    id: number
    dolar: number
    useIva: number
    autoPrice: number
    profit: number
    roundPrice: number
    default_categories_id: number
    threshold: number
    defafult_currency: number
    expiration_default: number
    bundle_discount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConfigAvgAggregateInputType = {
    id?: true
    dolar?: true
    profit?: true
    default_categories_id?: true
    threshold?: true
    expiration_default?: true
    bundle_discount?: true
  }

  export type ConfigSumAggregateInputType = {
    id?: true
    dolar?: true
    profit?: true
    default_categories_id?: true
    threshold?: true
    expiration_default?: true
    bundle_discount?: true
  }

  export type ConfigMinAggregateInputType = {
    id?: true
    dolar?: true
    useIva?: true
    autoPrice?: true
    profit?: true
    roundPrice?: true
    default_categories_id?: true
    threshold?: true
    defafult_currency?: true
    expiration_default?: true
    bundle_discount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfigMaxAggregateInputType = {
    id?: true
    dolar?: true
    useIva?: true
    autoPrice?: true
    profit?: true
    roundPrice?: true
    default_categories_id?: true
    threshold?: true
    defafult_currency?: true
    expiration_default?: true
    bundle_discount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfigCountAggregateInputType = {
    id?: true
    dolar?: true
    useIva?: true
    autoPrice?: true
    profit?: true
    roundPrice?: true
    default_categories_id?: true
    threshold?: true
    defafult_currency?: true
    expiration_default?: true
    bundle_discount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which config to aggregate.
     */
    where?: configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configs to fetch.
     */
    orderBy?: configOrderByWithRelationInput | configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned configs
    **/
    _count?: true | ConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigMaxAggregateInputType
  }

  export type GetConfigAggregateType<T extends ConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfig[P]>
      : GetScalarType<T[P], AggregateConfig[P]>
  }




  export type configGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: configWhereInput
    orderBy?: configOrderByWithAggregationInput | configOrderByWithAggregationInput[]
    by: ConfigScalarFieldEnum[] | ConfigScalarFieldEnum
    having?: configScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigCountAggregateInputType | true
    _avg?: ConfigAvgAggregateInputType
    _sum?: ConfigSumAggregateInputType
    _min?: ConfigMinAggregateInputType
    _max?: ConfigMaxAggregateInputType
  }

  export type ConfigGroupByOutputType = {
    id: number
    dolar: number
    useIva: boolean | null
    autoPrice: boolean | null
    profit: number
    roundPrice: boolean | null
    default_categories_id: number | null
    threshold: number | null
    defafult_currency: string | null
    expiration_default: number | null
    bundle_discount: number | null
    createdAt: Date
    updatedAt: Date
    _count: ConfigCountAggregateOutputType | null
    _avg: ConfigAvgAggregateOutputType | null
    _sum: ConfigSumAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  type GetConfigGroupByPayload<T extends configGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigGroupByOutputType[P]>
        }
      >
    >


  export type configSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dolar?: boolean
    useIva?: boolean
    autoPrice?: boolean
    profit?: boolean
    roundPrice?: boolean
    default_categories_id?: boolean
    threshold?: boolean
    defafult_currency?: boolean
    expiration_default?: boolean
    bundle_discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categorie?: boolean | config$categorieArgs<ExtArgs>
  }, ExtArgs["result"]["config"]>

  export type configSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dolar?: boolean
    useIva?: boolean
    autoPrice?: boolean
    profit?: boolean
    roundPrice?: boolean
    default_categories_id?: boolean
    threshold?: boolean
    defafult_currency?: boolean
    expiration_default?: boolean
    bundle_discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categorie?: boolean | config$categorieArgs<ExtArgs>
  }, ExtArgs["result"]["config"]>

  export type configSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dolar?: boolean
    useIva?: boolean
    autoPrice?: boolean
    profit?: boolean
    roundPrice?: boolean
    default_categories_id?: boolean
    threshold?: boolean
    defafult_currency?: boolean
    expiration_default?: boolean
    bundle_discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categorie?: boolean | config$categorieArgs<ExtArgs>
  }, ExtArgs["result"]["config"]>

  export type configSelectScalar = {
    id?: boolean
    dolar?: boolean
    useIva?: boolean
    autoPrice?: boolean
    profit?: boolean
    roundPrice?: boolean
    default_categories_id?: boolean
    threshold?: boolean
    defafult_currency?: boolean
    expiration_default?: boolean
    bundle_discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type configOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dolar" | "useIva" | "autoPrice" | "profit" | "roundPrice" | "default_categories_id" | "threshold" | "defafult_currency" | "expiration_default" | "bundle_discount" | "createdAt" | "updatedAt", ExtArgs["result"]["config"]>
  export type configInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | config$categorieArgs<ExtArgs>
  }
  export type configIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | config$categorieArgs<ExtArgs>
  }
  export type configIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | config$categorieArgs<ExtArgs>
  }

  export type $configPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "config"
    objects: {
      categorie: Prisma.$CategoriesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dolar: number
      useIva: boolean | null
      autoPrice: boolean | null
      profit: number
      roundPrice: boolean | null
      default_categories_id: number | null
      threshold: number | null
      defafult_currency: string | null
      expiration_default: number | null
      bundle_discount: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["config"]>
    composites: {}
  }

  type configGetPayload<S extends boolean | null | undefined | configDefaultArgs> = $Result.GetResult<Prisma.$configPayload, S>

  type configCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<configFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfigCountAggregateInputType | true
    }

  export interface configDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['config'], meta: { name: 'config' } }
    /**
     * Find zero or one Config that matches the filter.
     * @param {configFindUniqueArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends configFindUniqueArgs>(args: SelectSubset<T, configFindUniqueArgs<ExtArgs>>): Prisma__configClient<$Result.GetResult<Prisma.$configPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Config that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {configFindUniqueOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends configFindUniqueOrThrowArgs>(args: SelectSubset<T, configFindUniqueOrThrowArgs<ExtArgs>>): Prisma__configClient<$Result.GetResult<Prisma.$configPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configFindFirstArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends configFindFirstArgs>(args?: SelectSubset<T, configFindFirstArgs<ExtArgs>>): Prisma__configClient<$Result.GetResult<Prisma.$configPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Config that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configFindFirstOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends configFindFirstOrThrowArgs>(args?: SelectSubset<T, configFindFirstOrThrowArgs<ExtArgs>>): Prisma__configClient<$Result.GetResult<Prisma.$configPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configs
     * const configs = await prisma.config.findMany()
     * 
     * // Get first 10 Configs
     * const configs = await prisma.config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configWithIdOnly = await prisma.config.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends configFindManyArgs>(args?: SelectSubset<T, configFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Config.
     * @param {configCreateArgs} args - Arguments to create a Config.
     * @example
     * // Create one Config
     * const Config = await prisma.config.create({
     *   data: {
     *     // ... data to create a Config
     *   }
     * })
     * 
     */
    create<T extends configCreateArgs>(args: SelectSubset<T, configCreateArgs<ExtArgs>>): Prisma__configClient<$Result.GetResult<Prisma.$configPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configs.
     * @param {configCreateManyArgs} args - Arguments to create many Configs.
     * @example
     * // Create many Configs
     * const config = await prisma.config.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends configCreateManyArgs>(args?: SelectSubset<T, configCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configs and returns the data saved in the database.
     * @param {configCreateManyAndReturnArgs} args - Arguments to create many Configs.
     * @example
     * // Create many Configs
     * const config = await prisma.config.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configs and only return the `id`
     * const configWithIdOnly = await prisma.config.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends configCreateManyAndReturnArgs>(args?: SelectSubset<T, configCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Config.
     * @param {configDeleteArgs} args - Arguments to delete one Config.
     * @example
     * // Delete one Config
     * const Config = await prisma.config.delete({
     *   where: {
     *     // ... filter to delete one Config
     *   }
     * })
     * 
     */
    delete<T extends configDeleteArgs>(args: SelectSubset<T, configDeleteArgs<ExtArgs>>): Prisma__configClient<$Result.GetResult<Prisma.$configPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Config.
     * @param {configUpdateArgs} args - Arguments to update one Config.
     * @example
     * // Update one Config
     * const config = await prisma.config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends configUpdateArgs>(args: SelectSubset<T, configUpdateArgs<ExtArgs>>): Prisma__configClient<$Result.GetResult<Prisma.$configPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configs.
     * @param {configDeleteManyArgs} args - Arguments to filter Configs to delete.
     * @example
     * // Delete a few Configs
     * const { count } = await prisma.config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends configDeleteManyArgs>(args?: SelectSubset<T, configDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configs
     * const config = await prisma.config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends configUpdateManyArgs>(args: SelectSubset<T, configUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configs and returns the data updated in the database.
     * @param {configUpdateManyAndReturnArgs} args - Arguments to update many Configs.
     * @example
     * // Update many Configs
     * const config = await prisma.config.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Configs and only return the `id`
     * const configWithIdOnly = await prisma.config.updateManyAndReturn({
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
    updateManyAndReturn<T extends configUpdateManyAndReturnArgs>(args: SelectSubset<T, configUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Config.
     * @param {configUpsertArgs} args - Arguments to update or create a Config.
     * @example
     * // Update or create a Config
     * const config = await prisma.config.upsert({
     *   create: {
     *     // ... data to create a Config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Config we want to update
     *   }
     * })
     */
    upsert<T extends configUpsertArgs>(args: SelectSubset<T, configUpsertArgs<ExtArgs>>): Prisma__configClient<$Result.GetResult<Prisma.$configPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configCountArgs} args - Arguments to filter Configs to count.
     * @example
     * // Count the number of Configs
     * const count = await prisma.config.count({
     *   where: {
     *     // ... the filter for the Configs we want to count
     *   }
     * })
    **/
    count<T extends configCountArgs>(
      args?: Subset<T, configCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfigAggregateArgs>(args: Subset<T, ConfigAggregateArgs>): Prisma.PrismaPromise<GetConfigAggregateType<T>>

    /**
     * Group by Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configGroupByArgs} args - Group by arguments.
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
      T extends configGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: configGroupByArgs['orderBy'] }
        : { orderBy?: configGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, configGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the config model
   */
  readonly fields: configFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__configClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categorie<T extends config$categorieArgs<ExtArgs> = {}>(args?: Subset<T, config$categorieArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the config model
   */
  interface configFieldRefs {
    readonly id: FieldRef<"config", 'Int'>
    readonly dolar: FieldRef<"config", 'Float'>
    readonly useIva: FieldRef<"config", 'Boolean'>
    readonly autoPrice: FieldRef<"config", 'Boolean'>
    readonly profit: FieldRef<"config", 'Float'>
    readonly roundPrice: FieldRef<"config", 'Boolean'>
    readonly default_categories_id: FieldRef<"config", 'Int'>
    readonly threshold: FieldRef<"config", 'Int'>
    readonly defafult_currency: FieldRef<"config", 'String'>
    readonly expiration_default: FieldRef<"config", 'Int'>
    readonly bundle_discount: FieldRef<"config", 'Float'>
    readonly createdAt: FieldRef<"config", 'DateTime'>
    readonly updatedAt: FieldRef<"config", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * config findUnique
   */
  export type configFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the config
     */
    omit?: configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configInclude<ExtArgs> | null
    /**
     * Filter, which config to fetch.
     */
    where: configWhereUniqueInput
  }

  /**
   * config findUniqueOrThrow
   */
  export type configFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the config
     */
    omit?: configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configInclude<ExtArgs> | null
    /**
     * Filter, which config to fetch.
     */
    where: configWhereUniqueInput
  }

  /**
   * config findFirst
   */
  export type configFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the config
     */
    omit?: configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configInclude<ExtArgs> | null
    /**
     * Filter, which config to fetch.
     */
    where?: configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configs to fetch.
     */
    orderBy?: configOrderByWithRelationInput | configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configs.
     */
    cursor?: configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configs.
     */
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * config findFirstOrThrow
   */
  export type configFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the config
     */
    omit?: configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configInclude<ExtArgs> | null
    /**
     * Filter, which config to fetch.
     */
    where?: configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configs to fetch.
     */
    orderBy?: configOrderByWithRelationInput | configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configs.
     */
    cursor?: configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configs.
     */
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * config findMany
   */
  export type configFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the config
     */
    omit?: configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configInclude<ExtArgs> | null
    /**
     * Filter, which configs to fetch.
     */
    where?: configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configs to fetch.
     */
    orderBy?: configOrderByWithRelationInput | configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing configs.
     */
    cursor?: configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configs.
     */
    skip?: number
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * config create
   */
  export type configCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the config
     */
    omit?: configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configInclude<ExtArgs> | null
    /**
     * The data needed to create a config.
     */
    data: XOR<configCreateInput, configUncheckedCreateInput>
  }

  /**
   * config createMany
   */
  export type configCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many configs.
     */
    data: configCreateManyInput | configCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * config createManyAndReturn
   */
  export type configCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the config
     */
    omit?: configOmit<ExtArgs> | null
    /**
     * The data used to create many configs.
     */
    data: configCreateManyInput | configCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * config update
   */
  export type configUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the config
     */
    omit?: configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configInclude<ExtArgs> | null
    /**
     * The data needed to update a config.
     */
    data: XOR<configUpdateInput, configUncheckedUpdateInput>
    /**
     * Choose, which config to update.
     */
    where: configWhereUniqueInput
  }

  /**
   * config updateMany
   */
  export type configUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update configs.
     */
    data: XOR<configUpdateManyMutationInput, configUncheckedUpdateManyInput>
    /**
     * Filter which configs to update
     */
    where?: configWhereInput
    /**
     * Limit how many configs to update.
     */
    limit?: number
  }

  /**
   * config updateManyAndReturn
   */
  export type configUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the config
     */
    omit?: configOmit<ExtArgs> | null
    /**
     * The data used to update configs.
     */
    data: XOR<configUpdateManyMutationInput, configUncheckedUpdateManyInput>
    /**
     * Filter which configs to update
     */
    where?: configWhereInput
    /**
     * Limit how many configs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * config upsert
   */
  export type configUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the config
     */
    omit?: configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configInclude<ExtArgs> | null
    /**
     * The filter to search for the config to update in case it exists.
     */
    where: configWhereUniqueInput
    /**
     * In case the config found by the `where` argument doesn't exist, create a new config with this data.
     */
    create: XOR<configCreateInput, configUncheckedCreateInput>
    /**
     * In case the config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<configUpdateInput, configUncheckedUpdateInput>
  }

  /**
   * config delete
   */
  export type configDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the config
     */
    omit?: configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configInclude<ExtArgs> | null
    /**
     * Filter which config to delete.
     */
    where: configWhereUniqueInput
  }

  /**
   * config deleteMany
   */
  export type configDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configs to delete
     */
    where?: configWhereInput
    /**
     * Limit how many configs to delete.
     */
    limit?: number
  }

  /**
   * config.categorie
   */
  export type config$categorieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    where?: CategoriesWhereInput
  }

  /**
   * config without action
   */
  export type configDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the config
     */
    omit?: configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configInclude<ExtArgs> | null
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
    password: 'password',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug_url: 'slug_url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const SuppliersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    company: 'company',
    email: 'email',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    zip: 'zip',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SuppliersScalarFieldEnum = (typeof SuppliersScalarFieldEnum)[keyof typeof SuppliersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stock: 'stock',
    status: 'status',
    price: 'price',
    price_ent: 'price_ent',
    slugs: 'slugs',
    slugs_url: 'slugs_url',
    images: 'images',
    Brand: 'Brand',
    bundle: 'bundle',
    expiration: 'expiration',
    unity: 'unity',
    supplier_id: 'supplier_id',
    category_id: 'category_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const RecordsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    product_id: 'product_id',
    quantity: 'quantity',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecordsScalarFieldEnum = (typeof RecordsScalarFieldEnum)[keyof typeof RecordsScalarFieldEnum]


  export const PurhasesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    total_purchase_amout: 'total_purchase_amout',
    dolar_amout: 'dolar_amout',
    date_credit: 'date_credit',
    reference: 'reference',
    quantity: 'quantity',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PurhasesScalarFieldEnum = (typeof PurhasesScalarFieldEnum)[keyof typeof PurhasesScalarFieldEnum]


  export const ConfigScalarFieldEnum: {
    id: 'id',
    dolar: 'dolar',
    useIva: 'useIva',
    autoPrice: 'autoPrice',
    profit: 'profit',
    roundPrice: 'roundPrice',
    default_categories_id: 'default_categories_id',
    threshold: 'threshold',
    defafult_currency: 'defafult_currency',
    expiration_default: 'expiration_default',
    bundle_discount: 'bundle_discount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConfigScalarFieldEnum = (typeof ConfigScalarFieldEnum)[keyof typeof ConfigScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Records?: RecordsListRelationFilter
    Purhases?: PurhasesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Records?: RecordsOrderByRelationAggregateInput
    Purhases?: PurhasesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Records?: RecordsListRelationFilter
    Purhases?: PurhasesListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: IntFilter<"Categories"> | number
    name?: StringFilter<"Categories"> | string
    slug_url?: StringFilter<"Categories"> | string
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    Products?: ProductsListRelationFilter
    config?: ConfigListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Products?: ProductsOrderByRelationAggregateInput
    config?: configOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    name?: StringFilter<"Categories"> | string
    slug_url?: StringFilter<"Categories"> | string
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    Products?: ProductsListRelationFilter
    config?: ConfigListRelationFilter
  }, "id">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categories"> | number
    name?: StringWithAggregatesFilter<"Categories"> | string
    slug_url?: StringWithAggregatesFilter<"Categories"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
  }

  export type SuppliersWhereInput = {
    AND?: SuppliersWhereInput | SuppliersWhereInput[]
    OR?: SuppliersWhereInput[]
    NOT?: SuppliersWhereInput | SuppliersWhereInput[]
    id?: IntFilter<"Suppliers"> | number
    name?: StringFilter<"Suppliers"> | string
    company?: StringNullableFilter<"Suppliers"> | string | null
    email?: StringNullableFilter<"Suppliers"> | string | null
    address?: StringNullableFilter<"Suppliers"> | string | null
    city?: StringNullableFilter<"Suppliers"> | string | null
    state?: StringNullableFilter<"Suppliers"> | string | null
    country?: StringNullableFilter<"Suppliers"> | string | null
    zip?: StringNullableFilter<"Suppliers"> | string | null
    phone?: StringNullableFilter<"Suppliers"> | string | null
    createdAt?: DateTimeFilter<"Suppliers"> | Date | string
    updatedAt?: DateTimeFilter<"Suppliers"> | Date | string
    Products?: ProductsListRelationFilter
  }

  export type SuppliersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Products?: ProductsOrderByRelationAggregateInput
  }

  export type SuppliersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SuppliersWhereInput | SuppliersWhereInput[]
    OR?: SuppliersWhereInput[]
    NOT?: SuppliersWhereInput | SuppliersWhereInput[]
    name?: StringFilter<"Suppliers"> | string
    company?: StringNullableFilter<"Suppliers"> | string | null
    email?: StringNullableFilter<"Suppliers"> | string | null
    address?: StringNullableFilter<"Suppliers"> | string | null
    city?: StringNullableFilter<"Suppliers"> | string | null
    state?: StringNullableFilter<"Suppliers"> | string | null
    country?: StringNullableFilter<"Suppliers"> | string | null
    zip?: StringNullableFilter<"Suppliers"> | string | null
    phone?: StringNullableFilter<"Suppliers"> | string | null
    createdAt?: DateTimeFilter<"Suppliers"> | Date | string
    updatedAt?: DateTimeFilter<"Suppliers"> | Date | string
    Products?: ProductsListRelationFilter
  }, "id">

  export type SuppliersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SuppliersCountOrderByAggregateInput
    _avg?: SuppliersAvgOrderByAggregateInput
    _max?: SuppliersMaxOrderByAggregateInput
    _min?: SuppliersMinOrderByAggregateInput
    _sum?: SuppliersSumOrderByAggregateInput
  }

  export type SuppliersScalarWhereWithAggregatesInput = {
    AND?: SuppliersScalarWhereWithAggregatesInput | SuppliersScalarWhereWithAggregatesInput[]
    OR?: SuppliersScalarWhereWithAggregatesInput[]
    NOT?: SuppliersScalarWhereWithAggregatesInput | SuppliersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Suppliers"> | number
    name?: StringWithAggregatesFilter<"Suppliers"> | string
    company?: StringNullableWithAggregatesFilter<"Suppliers"> | string | null
    email?: StringNullableWithAggregatesFilter<"Suppliers"> | string | null
    address?: StringNullableWithAggregatesFilter<"Suppliers"> | string | null
    city?: StringNullableWithAggregatesFilter<"Suppliers"> | string | null
    state?: StringNullableWithAggregatesFilter<"Suppliers"> | string | null
    country?: StringNullableWithAggregatesFilter<"Suppliers"> | string | null
    zip?: StringNullableWithAggregatesFilter<"Suppliers"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Suppliers"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Suppliers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Suppliers"> | Date | string
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    id?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    stock?: IntFilter<"Products"> | number
    status?: BoolNullableFilter<"Products"> | boolean | null
    price?: FloatFilter<"Products"> | number
    price_ent?: FloatFilter<"Products"> | number
    slugs?: StringNullableListFilter<"Products">
    slugs_url?: StringNullableListFilter<"Products">
    images?: StringNullableFilter<"Products"> | string | null
    Brand?: StringNullableFilter<"Products"> | string | null
    bundle?: IntNullableFilter<"Products"> | number | null
    expiration?: DateTimeNullableFilter<"Products"> | Date | string | null
    unity?: StringNullableFilter<"Products"> | string | null
    supplier_id?: IntNullableFilter<"Products"> | number | null
    category_id?: IntNullableFilter<"Products"> | number | null
    createdAt?: DateTimeFilter<"Products"> | Date | string
    updatedAt?: DateTimeFilter<"Products"> | Date | string
    supplier?: XOR<SuppliersNullableScalarRelationFilter, SuppliersWhereInput> | null
    Categories?: XOR<CategoriesNullableScalarRelationFilter, CategoriesWhereInput> | null
    Records?: RecordsListRelationFilter
    Purhases?: PurhasesListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    status?: SortOrderInput | SortOrder
    price?: SortOrder
    price_ent?: SortOrder
    slugs?: SortOrder
    slugs_url?: SortOrder
    images?: SortOrderInput | SortOrder
    Brand?: SortOrderInput | SortOrder
    bundle?: SortOrderInput | SortOrder
    expiration?: SortOrderInput | SortOrder
    unity?: SortOrderInput | SortOrder
    supplier_id?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supplier?: SuppliersOrderByWithRelationInput
    Categories?: CategoriesOrderByWithRelationInput
    Records?: RecordsOrderByRelationAggregateInput
    Purhases?: PurhasesOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    name?: StringFilter<"Products"> | string
    stock?: IntFilter<"Products"> | number
    status?: BoolNullableFilter<"Products"> | boolean | null
    price?: FloatFilter<"Products"> | number
    price_ent?: FloatFilter<"Products"> | number
    slugs?: StringNullableListFilter<"Products">
    slugs_url?: StringNullableListFilter<"Products">
    images?: StringNullableFilter<"Products"> | string | null
    Brand?: StringNullableFilter<"Products"> | string | null
    bundle?: IntNullableFilter<"Products"> | number | null
    expiration?: DateTimeNullableFilter<"Products"> | Date | string | null
    unity?: StringNullableFilter<"Products"> | string | null
    supplier_id?: IntNullableFilter<"Products"> | number | null
    category_id?: IntNullableFilter<"Products"> | number | null
    createdAt?: DateTimeFilter<"Products"> | Date | string
    updatedAt?: DateTimeFilter<"Products"> | Date | string
    supplier?: XOR<SuppliersNullableScalarRelationFilter, SuppliersWhereInput> | null
    Categories?: XOR<CategoriesNullableScalarRelationFilter, CategoriesWhereInput> | null
    Records?: RecordsListRelationFilter
    Purhases?: PurhasesListRelationFilter
  }, "id">

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    status?: SortOrderInput | SortOrder
    price?: SortOrder
    price_ent?: SortOrder
    slugs?: SortOrder
    slugs_url?: SortOrder
    images?: SortOrderInput | SortOrder
    Brand?: SortOrderInput | SortOrder
    bundle?: SortOrderInput | SortOrder
    expiration?: SortOrderInput | SortOrder
    unity?: SortOrderInput | SortOrder
    supplier_id?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Products"> | number
    name?: StringWithAggregatesFilter<"Products"> | string
    stock?: IntWithAggregatesFilter<"Products"> | number
    status?: BoolNullableWithAggregatesFilter<"Products"> | boolean | null
    price?: FloatWithAggregatesFilter<"Products"> | number
    price_ent?: FloatWithAggregatesFilter<"Products"> | number
    slugs?: StringNullableListFilter<"Products">
    slugs_url?: StringNullableListFilter<"Products">
    images?: StringNullableWithAggregatesFilter<"Products"> | string | null
    Brand?: StringNullableWithAggregatesFilter<"Products"> | string | null
    bundle?: IntNullableWithAggregatesFilter<"Products"> | number | null
    expiration?: DateTimeNullableWithAggregatesFilter<"Products"> | Date | string | null
    unity?: StringNullableWithAggregatesFilter<"Products"> | string | null
    supplier_id?: IntNullableWithAggregatesFilter<"Products"> | number | null
    category_id?: IntNullableWithAggregatesFilter<"Products"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Products"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Products"> | Date | string
  }

  export type RecordsWhereInput = {
    AND?: RecordsWhereInput | RecordsWhereInput[]
    OR?: RecordsWhereInput[]
    NOT?: RecordsWhereInput | RecordsWhereInput[]
    id?: IntFilter<"Records"> | number
    user_id?: StringNullableFilter<"Records"> | string | null
    product_id?: IntNullableFilter<"Records"> | number | null
    quantity?: IntFilter<"Records"> | number
    status?: BoolNullableFilter<"Records"> | boolean | null
    createdAt?: DateTimeFilter<"Records"> | Date | string
    updatedAt?: DateTimeFilter<"Records"> | Date | string
    productList?: ProductsListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type RecordsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    quantity?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productList?: ProductsOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type RecordsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecordsWhereInput | RecordsWhereInput[]
    OR?: RecordsWhereInput[]
    NOT?: RecordsWhereInput | RecordsWhereInput[]
    user_id?: StringNullableFilter<"Records"> | string | null
    product_id?: IntNullableFilter<"Records"> | number | null
    quantity?: IntFilter<"Records"> | number
    status?: BoolNullableFilter<"Records"> | boolean | null
    createdAt?: DateTimeFilter<"Records"> | Date | string
    updatedAt?: DateTimeFilter<"Records"> | Date | string
    productList?: ProductsListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type RecordsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    quantity?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecordsCountOrderByAggregateInput
    _avg?: RecordsAvgOrderByAggregateInput
    _max?: RecordsMaxOrderByAggregateInput
    _min?: RecordsMinOrderByAggregateInput
    _sum?: RecordsSumOrderByAggregateInput
  }

  export type RecordsScalarWhereWithAggregatesInput = {
    AND?: RecordsScalarWhereWithAggregatesInput | RecordsScalarWhereWithAggregatesInput[]
    OR?: RecordsScalarWhereWithAggregatesInput[]
    NOT?: RecordsScalarWhereWithAggregatesInput | RecordsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Records"> | number
    user_id?: StringNullableWithAggregatesFilter<"Records"> | string | null
    product_id?: IntNullableWithAggregatesFilter<"Records"> | number | null
    quantity?: IntWithAggregatesFilter<"Records"> | number
    status?: BoolNullableWithAggregatesFilter<"Records"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Records"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Records"> | Date | string
  }

  export type PurhasesWhereInput = {
    AND?: PurhasesWhereInput | PurhasesWhereInput[]
    OR?: PurhasesWhereInput[]
    NOT?: PurhasesWhereInput | PurhasesWhereInput[]
    id?: IntFilter<"Purhases"> | number
    user_id?: StringNullableFilter<"Purhases"> | string | null
    total_purchase_amout?: FloatNullableListFilter<"Purhases">
    dolar_amout?: FloatNullableFilter<"Purhases"> | number | null
    date_credit?: IntNullableFilter<"Purhases"> | number | null
    reference?: StringNullableFilter<"Purhases"> | string | null
    quantity?: IntFilter<"Purhases"> | number
    status?: BoolNullableFilter<"Purhases"> | boolean | null
    createdAt?: DateTimeFilter<"Purhases"> | Date | string
    updatedAt?: DateTimeFilter<"Purhases"> | Date | string
    products?: ProductsListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PurhasesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    total_purchase_amout?: SortOrder
    dolar_amout?: SortOrderInput | SortOrder
    date_credit?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    quantity?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductsOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type PurhasesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PurhasesWhereInput | PurhasesWhereInput[]
    OR?: PurhasesWhereInput[]
    NOT?: PurhasesWhereInput | PurhasesWhereInput[]
    user_id?: StringNullableFilter<"Purhases"> | string | null
    total_purchase_amout?: FloatNullableListFilter<"Purhases">
    dolar_amout?: FloatNullableFilter<"Purhases"> | number | null
    date_credit?: IntNullableFilter<"Purhases"> | number | null
    reference?: StringNullableFilter<"Purhases"> | string | null
    quantity?: IntFilter<"Purhases"> | number
    status?: BoolNullableFilter<"Purhases"> | boolean | null
    createdAt?: DateTimeFilter<"Purhases"> | Date | string
    updatedAt?: DateTimeFilter<"Purhases"> | Date | string
    products?: ProductsListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type PurhasesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    total_purchase_amout?: SortOrder
    dolar_amout?: SortOrderInput | SortOrder
    date_credit?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    quantity?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PurhasesCountOrderByAggregateInput
    _avg?: PurhasesAvgOrderByAggregateInput
    _max?: PurhasesMaxOrderByAggregateInput
    _min?: PurhasesMinOrderByAggregateInput
    _sum?: PurhasesSumOrderByAggregateInput
  }

  export type PurhasesScalarWhereWithAggregatesInput = {
    AND?: PurhasesScalarWhereWithAggregatesInput | PurhasesScalarWhereWithAggregatesInput[]
    OR?: PurhasesScalarWhereWithAggregatesInput[]
    NOT?: PurhasesScalarWhereWithAggregatesInput | PurhasesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Purhases"> | number
    user_id?: StringNullableWithAggregatesFilter<"Purhases"> | string | null
    total_purchase_amout?: FloatNullableListFilter<"Purhases">
    dolar_amout?: FloatNullableWithAggregatesFilter<"Purhases"> | number | null
    date_credit?: IntNullableWithAggregatesFilter<"Purhases"> | number | null
    reference?: StringNullableWithAggregatesFilter<"Purhases"> | string | null
    quantity?: IntWithAggregatesFilter<"Purhases"> | number
    status?: BoolNullableWithAggregatesFilter<"Purhases"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Purhases"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Purhases"> | Date | string
  }

  export type configWhereInput = {
    AND?: configWhereInput | configWhereInput[]
    OR?: configWhereInput[]
    NOT?: configWhereInput | configWhereInput[]
    id?: IntFilter<"config"> | number
    dolar?: FloatFilter<"config"> | number
    useIva?: BoolNullableFilter<"config"> | boolean | null
    autoPrice?: BoolNullableFilter<"config"> | boolean | null
    profit?: FloatFilter<"config"> | number
    roundPrice?: BoolNullableFilter<"config"> | boolean | null
    default_categories_id?: IntNullableFilter<"config"> | number | null
    threshold?: IntNullableFilter<"config"> | number | null
    defafult_currency?: StringNullableFilter<"config"> | string | null
    expiration_default?: IntNullableFilter<"config"> | number | null
    bundle_discount?: FloatNullableFilter<"config"> | number | null
    createdAt?: DateTimeFilter<"config"> | Date | string
    updatedAt?: DateTimeFilter<"config"> | Date | string
    categorie?: XOR<CategoriesNullableScalarRelationFilter, CategoriesWhereInput> | null
  }

  export type configOrderByWithRelationInput = {
    id?: SortOrder
    dolar?: SortOrder
    useIva?: SortOrderInput | SortOrder
    autoPrice?: SortOrderInput | SortOrder
    profit?: SortOrder
    roundPrice?: SortOrderInput | SortOrder
    default_categories_id?: SortOrderInput | SortOrder
    threshold?: SortOrderInput | SortOrder
    defafult_currency?: SortOrderInput | SortOrder
    expiration_default?: SortOrderInput | SortOrder
    bundle_discount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categorie?: CategoriesOrderByWithRelationInput
  }

  export type configWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: configWhereInput | configWhereInput[]
    OR?: configWhereInput[]
    NOT?: configWhereInput | configWhereInput[]
    dolar?: FloatFilter<"config"> | number
    useIva?: BoolNullableFilter<"config"> | boolean | null
    autoPrice?: BoolNullableFilter<"config"> | boolean | null
    profit?: FloatFilter<"config"> | number
    roundPrice?: BoolNullableFilter<"config"> | boolean | null
    default_categories_id?: IntNullableFilter<"config"> | number | null
    threshold?: IntNullableFilter<"config"> | number | null
    defafult_currency?: StringNullableFilter<"config"> | string | null
    expiration_default?: IntNullableFilter<"config"> | number | null
    bundle_discount?: FloatNullableFilter<"config"> | number | null
    createdAt?: DateTimeFilter<"config"> | Date | string
    updatedAt?: DateTimeFilter<"config"> | Date | string
    categorie?: XOR<CategoriesNullableScalarRelationFilter, CategoriesWhereInput> | null
  }, "id">

  export type configOrderByWithAggregationInput = {
    id?: SortOrder
    dolar?: SortOrder
    useIva?: SortOrderInput | SortOrder
    autoPrice?: SortOrderInput | SortOrder
    profit?: SortOrder
    roundPrice?: SortOrderInput | SortOrder
    default_categories_id?: SortOrderInput | SortOrder
    threshold?: SortOrderInput | SortOrder
    defafult_currency?: SortOrderInput | SortOrder
    expiration_default?: SortOrderInput | SortOrder
    bundle_discount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: configCountOrderByAggregateInput
    _avg?: configAvgOrderByAggregateInput
    _max?: configMaxOrderByAggregateInput
    _min?: configMinOrderByAggregateInput
    _sum?: configSumOrderByAggregateInput
  }

  export type configScalarWhereWithAggregatesInput = {
    AND?: configScalarWhereWithAggregatesInput | configScalarWhereWithAggregatesInput[]
    OR?: configScalarWhereWithAggregatesInput[]
    NOT?: configScalarWhereWithAggregatesInput | configScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"config"> | number
    dolar?: FloatWithAggregatesFilter<"config"> | number
    useIva?: BoolNullableWithAggregatesFilter<"config"> | boolean | null
    autoPrice?: BoolNullableWithAggregatesFilter<"config"> | boolean | null
    profit?: FloatWithAggregatesFilter<"config"> | number
    roundPrice?: BoolNullableWithAggregatesFilter<"config"> | boolean | null
    default_categories_id?: IntNullableWithAggregatesFilter<"config"> | number | null
    threshold?: IntNullableWithAggregatesFilter<"config"> | number | null
    defafult_currency?: StringNullableWithAggregatesFilter<"config"> | string | null
    expiration_default?: IntNullableWithAggregatesFilter<"config"> | number | null
    bundle_discount?: FloatNullableWithAggregatesFilter<"config"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"config"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"config"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Records?: RecordsCreateNestedManyWithoutUserInput
    Purhases?: PurhasesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Records?: RecordsUncheckedCreateNestedManyWithoutUserInput
    Purhases?: PurhasesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Records?: RecordsUpdateManyWithoutUserNestedInput
    Purhases?: PurhasesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Records?: RecordsUncheckedUpdateManyWithoutUserNestedInput
    Purhases?: PurhasesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesCreateInput = {
    name: string
    slug_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Products?: ProductsCreateNestedManyWithoutCategoriesInput
    config?: configCreateNestedManyWithoutCategorieInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: number
    name: string
    slug_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Products?: ProductsUncheckedCreateNestedManyWithoutCategoriesInput
    config?: configUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type CategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Products?: ProductsUpdateManyWithoutCategoriesNestedInput
    config?: configUpdateManyWithoutCategorieNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Products?: ProductsUncheckedUpdateManyWithoutCategoriesNestedInput
    config?: configUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: number
    name: string
    slug_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuppliersCreateInput = {
    name: string
    company?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zip?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Products?: ProductsCreateNestedManyWithoutSupplierInput
  }

  export type SuppliersUncheckedCreateInput = {
    id?: number
    name: string
    company?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zip?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Products?: ProductsUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SuppliersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Products?: ProductsUpdateManyWithoutSupplierNestedInput
  }

  export type SuppliersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Products?: ProductsUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SuppliersCreateManyInput = {
    id?: number
    name: string
    company?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zip?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuppliersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuppliersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateInput = {
    name: string
    stock: number
    status?: boolean | null
    price: number
    price_ent: number
    slugs?: ProductsCreateslugsInput | string[]
    slugs_url?: ProductsCreateslugs_urlInput | string[]
    images?: string | null
    Brand?: string | null
    bundle?: number | null
    expiration?: Date | string | null
    unity?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplier?: SuppliersCreateNestedOneWithoutProductsInput
    Categories?: CategoriesCreateNestedOneWithoutProductsInput
    Records?: RecordsCreateNestedManyWithoutProductListInput
    Purhases?: PurhasesCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateInput = {
    id?: number
    name: string
    stock: number
    status?: boolean | null
    price: number
    price_ent: number
    slugs?: ProductsCreateslugsInput | string[]
    slugs_url?: ProductsCreateslugs_urlInput | string[]
    images?: string | null
    Brand?: string | null
    bundle?: number | null
    expiration?: Date | string | null
    unity?: string | null
    supplier_id?: number | null
    category_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Records?: RecordsUncheckedCreateNestedManyWithoutProductListInput
    Purhases?: PurhasesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: FloatFieldUpdateOperationsInput | number
    price_ent?: FloatFieldUpdateOperationsInput | number
    slugs?: ProductsUpdateslugsInput | string[]
    slugs_url?: ProductsUpdateslugs_urlInput | string[]
    images?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    bundle?: NullableIntFieldUpdateOperationsInput | number | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unity?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SuppliersUpdateOneWithoutProductsNestedInput
    Categories?: CategoriesUpdateOneWithoutProductsNestedInput
    Records?: RecordsUpdateManyWithoutProductListNestedInput
    Purhases?: PurhasesUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: FloatFieldUpdateOperationsInput | number
    price_ent?: FloatFieldUpdateOperationsInput | number
    slugs?: ProductsUpdateslugsInput | string[]
    slugs_url?: ProductsUpdateslugs_urlInput | string[]
    images?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    bundle?: NullableIntFieldUpdateOperationsInput | number | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unity?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Records?: RecordsUncheckedUpdateManyWithoutProductListNestedInput
    Purhases?: PurhasesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsCreateManyInput = {
    id?: number
    name: string
    stock: number
    status?: boolean | null
    price: number
    price_ent: number
    slugs?: ProductsCreateslugsInput | string[]
    slugs_url?: ProductsCreateslugs_urlInput | string[]
    images?: string | null
    Brand?: string | null
    bundle?: number | null
    expiration?: Date | string | null
    unity?: string | null
    supplier_id?: number | null
    category_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: FloatFieldUpdateOperationsInput | number
    price_ent?: FloatFieldUpdateOperationsInput | number
    slugs?: ProductsUpdateslugsInput | string[]
    slugs_url?: ProductsUpdateslugs_urlInput | string[]
    images?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    bundle?: NullableIntFieldUpdateOperationsInput | number | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unity?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: FloatFieldUpdateOperationsInput | number
    price_ent?: FloatFieldUpdateOperationsInput | number
    slugs?: ProductsUpdateslugsInput | string[]
    slugs_url?: ProductsUpdateslugs_urlInput | string[]
    images?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    bundle?: NullableIntFieldUpdateOperationsInput | number | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unity?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordsCreateInput = {
    product_id?: number | null
    quantity: number
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productList?: ProductsCreateNestedManyWithoutRecordsInput
    User?: UserCreateNestedOneWithoutRecordsInput
  }

  export type RecordsUncheckedCreateInput = {
    id?: number
    user_id?: string | null
    product_id?: number | null
    quantity: number
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productList?: ProductsUncheckedCreateNestedManyWithoutRecordsInput
  }

  export type RecordsUpdateInput = {
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productList?: ProductsUpdateManyWithoutRecordsNestedInput
    User?: UserUpdateOneWithoutRecordsNestedInput
  }

  export type RecordsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productList?: ProductsUncheckedUpdateManyWithoutRecordsNestedInput
  }

  export type RecordsCreateManyInput = {
    id?: number
    user_id?: string | null
    product_id?: number | null
    quantity: number
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecordsUpdateManyMutationInput = {
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurhasesCreateInput = {
    total_purchase_amout?: PurhasesCreatetotal_purchase_amoutInput | number[]
    dolar_amout?: number | null
    date_credit?: number | null
    reference?: string | null
    quantity: number
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductsCreateNestedManyWithoutPurhasesInput
    User?: UserCreateNestedOneWithoutPurhasesInput
  }

  export type PurhasesUncheckedCreateInput = {
    id?: number
    user_id?: string | null
    total_purchase_amout?: PurhasesCreatetotal_purchase_amoutInput | number[]
    dolar_amout?: number | null
    date_credit?: number | null
    reference?: string | null
    quantity: number
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductsUncheckedCreateNestedManyWithoutPurhasesInput
  }

  export type PurhasesUpdateInput = {
    total_purchase_amout?: PurhasesUpdatetotal_purchase_amoutInput | number[]
    dolar_amout?: NullableFloatFieldUpdateOperationsInput | number | null
    date_credit?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUpdateManyWithoutPurhasesNestedInput
    User?: UserUpdateOneWithoutPurhasesNestedInput
  }

  export type PurhasesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    total_purchase_amout?: PurhasesUpdatetotal_purchase_amoutInput | number[]
    dolar_amout?: NullableFloatFieldUpdateOperationsInput | number | null
    date_credit?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUncheckedUpdateManyWithoutPurhasesNestedInput
  }

  export type PurhasesCreateManyInput = {
    id?: number
    user_id?: string | null
    total_purchase_amout?: PurhasesCreatetotal_purchase_amoutInput | number[]
    dolar_amout?: number | null
    date_credit?: number | null
    reference?: string | null
    quantity: number
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurhasesUpdateManyMutationInput = {
    total_purchase_amout?: PurhasesUpdatetotal_purchase_amoutInput | number[]
    dolar_amout?: NullableFloatFieldUpdateOperationsInput | number | null
    date_credit?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurhasesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    total_purchase_amout?: PurhasesUpdatetotal_purchase_amoutInput | number[]
    dolar_amout?: NullableFloatFieldUpdateOperationsInput | number | null
    date_credit?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type configCreateInput = {
    dolar: number
    useIva?: boolean | null
    autoPrice?: boolean | null
    profit?: number
    roundPrice?: boolean | null
    threshold?: number | null
    defafult_currency?: string | null
    expiration_default?: number | null
    bundle_discount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categorie?: CategoriesCreateNestedOneWithoutConfigInput
  }

  export type configUncheckedCreateInput = {
    id?: number
    dolar: number
    useIva?: boolean | null
    autoPrice?: boolean | null
    profit?: number
    roundPrice?: boolean | null
    default_categories_id?: number | null
    threshold?: number | null
    defafult_currency?: string | null
    expiration_default?: number | null
    bundle_discount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type configUpdateInput = {
    dolar?: FloatFieldUpdateOperationsInput | number
    useIva?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoPrice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profit?: FloatFieldUpdateOperationsInput | number
    roundPrice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    threshold?: NullableIntFieldUpdateOperationsInput | number | null
    defafult_currency?: NullableStringFieldUpdateOperationsInput | string | null
    expiration_default?: NullableIntFieldUpdateOperationsInput | number | null
    bundle_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categorie?: CategoriesUpdateOneWithoutConfigNestedInput
  }

  export type configUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dolar?: FloatFieldUpdateOperationsInput | number
    useIva?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoPrice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profit?: FloatFieldUpdateOperationsInput | number
    roundPrice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    default_categories_id?: NullableIntFieldUpdateOperationsInput | number | null
    threshold?: NullableIntFieldUpdateOperationsInput | number | null
    defafult_currency?: NullableStringFieldUpdateOperationsInput | string | null
    expiration_default?: NullableIntFieldUpdateOperationsInput | number | null
    bundle_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type configCreateManyInput = {
    id?: number
    dolar: number
    useIva?: boolean | null
    autoPrice?: boolean | null
    profit?: number
    roundPrice?: boolean | null
    default_categories_id?: number | null
    threshold?: number | null
    defafult_currency?: string | null
    expiration_default?: number | null
    bundle_discount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type configUpdateManyMutationInput = {
    dolar?: FloatFieldUpdateOperationsInput | number
    useIva?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoPrice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profit?: FloatFieldUpdateOperationsInput | number
    roundPrice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    threshold?: NullableIntFieldUpdateOperationsInput | number | null
    defafult_currency?: NullableStringFieldUpdateOperationsInput | string | null
    expiration_default?: NullableIntFieldUpdateOperationsInput | number | null
    bundle_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type configUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dolar?: FloatFieldUpdateOperationsInput | number
    useIva?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoPrice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profit?: FloatFieldUpdateOperationsInput | number
    roundPrice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    default_categories_id?: NullableIntFieldUpdateOperationsInput | number | null
    threshold?: NullableIntFieldUpdateOperationsInput | number | null
    defafult_currency?: NullableStringFieldUpdateOperationsInput | string | null
    expiration_default?: NullableIntFieldUpdateOperationsInput | number | null
    bundle_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type RecordsListRelationFilter = {
    every?: RecordsWhereInput
    some?: RecordsWhereInput
    none?: RecordsWhereInput
  }

  export type PurhasesListRelationFilter = {
    every?: PurhasesWhereInput
    some?: PurhasesWhereInput
    none?: PurhasesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RecordsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurhasesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type ConfigListRelationFilter = {
    every?: configWhereInput
    some?: configWhereInput
    none?: configWhereInput
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type configOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
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

  export type SuppliersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuppliersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SuppliersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuppliersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuppliersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type SuppliersNullableScalarRelationFilter = {
    is?: SuppliersWhereInput | null
    isNot?: SuppliersWhereInput | null
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: CategoriesWhereInput | null
    isNot?: CategoriesWhereInput | null
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    price?: SortOrder
    price_ent?: SortOrder
    slugs?: SortOrder
    slugs_url?: SortOrder
    images?: SortOrder
    Brand?: SortOrder
    bundle?: SortOrder
    expiration?: SortOrder
    unity?: SortOrder
    supplier_id?: SortOrder
    category_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    price_ent?: SortOrder
    bundle?: SortOrder
    supplier_id?: SortOrder
    category_id?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    price?: SortOrder
    price_ent?: SortOrder
    images?: SortOrder
    Brand?: SortOrder
    bundle?: SortOrder
    expiration?: SortOrder
    unity?: SortOrder
    supplier_id?: SortOrder
    category_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    price?: SortOrder
    price_ent?: SortOrder
    images?: SortOrder
    Brand?: SortOrder
    bundle?: SortOrder
    expiration?: SortOrder
    unity?: SortOrder
    supplier_id?: SortOrder
    category_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    price_ent?: SortOrder
    bundle?: SortOrder
    supplier_id?: SortOrder
    category_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type RecordsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecordsAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type RecordsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecordsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecordsSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    has?: number | FloatFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListFloatFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListFloatFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PurhasesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_purchase_amout?: SortOrder
    dolar_amout?: SortOrder
    date_credit?: SortOrder
    reference?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurhasesAvgOrderByAggregateInput = {
    id?: SortOrder
    total_purchase_amout?: SortOrder
    dolar_amout?: SortOrder
    date_credit?: SortOrder
    quantity?: SortOrder
  }

  export type PurhasesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    dolar_amout?: SortOrder
    date_credit?: SortOrder
    reference?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurhasesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    dolar_amout?: SortOrder
    date_credit?: SortOrder
    reference?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurhasesSumOrderByAggregateInput = {
    id?: SortOrder
    total_purchase_amout?: SortOrder
    dolar_amout?: SortOrder
    date_credit?: SortOrder
    quantity?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type configCountOrderByAggregateInput = {
    id?: SortOrder
    dolar?: SortOrder
    useIva?: SortOrder
    autoPrice?: SortOrder
    profit?: SortOrder
    roundPrice?: SortOrder
    default_categories_id?: SortOrder
    threshold?: SortOrder
    defafult_currency?: SortOrder
    expiration_default?: SortOrder
    bundle_discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type configAvgOrderByAggregateInput = {
    id?: SortOrder
    dolar?: SortOrder
    profit?: SortOrder
    default_categories_id?: SortOrder
    threshold?: SortOrder
    expiration_default?: SortOrder
    bundle_discount?: SortOrder
  }

  export type configMaxOrderByAggregateInput = {
    id?: SortOrder
    dolar?: SortOrder
    useIva?: SortOrder
    autoPrice?: SortOrder
    profit?: SortOrder
    roundPrice?: SortOrder
    default_categories_id?: SortOrder
    threshold?: SortOrder
    defafult_currency?: SortOrder
    expiration_default?: SortOrder
    bundle_discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type configMinOrderByAggregateInput = {
    id?: SortOrder
    dolar?: SortOrder
    useIva?: SortOrder
    autoPrice?: SortOrder
    profit?: SortOrder
    roundPrice?: SortOrder
    default_categories_id?: SortOrder
    threshold?: SortOrder
    defafult_currency?: SortOrder
    expiration_default?: SortOrder
    bundle_discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type configSumOrderByAggregateInput = {
    id?: SortOrder
    dolar?: SortOrder
    profit?: SortOrder
    default_categories_id?: SortOrder
    threshold?: SortOrder
    expiration_default?: SortOrder
    bundle_discount?: SortOrder
  }

  export type RecordsCreateNestedManyWithoutUserInput = {
    create?: XOR<RecordsCreateWithoutUserInput, RecordsUncheckedCreateWithoutUserInput> | RecordsCreateWithoutUserInput[] | RecordsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutUserInput | RecordsCreateOrConnectWithoutUserInput[]
    createMany?: RecordsCreateManyUserInputEnvelope
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
  }

  export type PurhasesCreateNestedManyWithoutUserInput = {
    create?: XOR<PurhasesCreateWithoutUserInput, PurhasesUncheckedCreateWithoutUserInput> | PurhasesCreateWithoutUserInput[] | PurhasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurhasesCreateOrConnectWithoutUserInput | PurhasesCreateOrConnectWithoutUserInput[]
    createMany?: PurhasesCreateManyUserInputEnvelope
    connect?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
  }

  export type RecordsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecordsCreateWithoutUserInput, RecordsUncheckedCreateWithoutUserInput> | RecordsCreateWithoutUserInput[] | RecordsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutUserInput | RecordsCreateOrConnectWithoutUserInput[]
    createMany?: RecordsCreateManyUserInputEnvelope
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
  }

  export type PurhasesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PurhasesCreateWithoutUserInput, PurhasesUncheckedCreateWithoutUserInput> | PurhasesCreateWithoutUserInput[] | PurhasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurhasesCreateOrConnectWithoutUserInput | PurhasesCreateOrConnectWithoutUserInput[]
    createMany?: PurhasesCreateManyUserInputEnvelope
    connect?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RecordsUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecordsCreateWithoutUserInput, RecordsUncheckedCreateWithoutUserInput> | RecordsCreateWithoutUserInput[] | RecordsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutUserInput | RecordsCreateOrConnectWithoutUserInput[]
    upsert?: RecordsUpsertWithWhereUniqueWithoutUserInput | RecordsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecordsCreateManyUserInputEnvelope
    set?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    disconnect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    delete?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    update?: RecordsUpdateWithWhereUniqueWithoutUserInput | RecordsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecordsUpdateManyWithWhereWithoutUserInput | RecordsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecordsScalarWhereInput | RecordsScalarWhereInput[]
  }

  export type PurhasesUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurhasesCreateWithoutUserInput, PurhasesUncheckedCreateWithoutUserInput> | PurhasesCreateWithoutUserInput[] | PurhasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurhasesCreateOrConnectWithoutUserInput | PurhasesCreateOrConnectWithoutUserInput[]
    upsert?: PurhasesUpsertWithWhereUniqueWithoutUserInput | PurhasesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurhasesCreateManyUserInputEnvelope
    set?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
    disconnect?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
    delete?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
    connect?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
    update?: PurhasesUpdateWithWhereUniqueWithoutUserInput | PurhasesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurhasesUpdateManyWithWhereWithoutUserInput | PurhasesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurhasesScalarWhereInput | PurhasesScalarWhereInput[]
  }

  export type RecordsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecordsCreateWithoutUserInput, RecordsUncheckedCreateWithoutUserInput> | RecordsCreateWithoutUserInput[] | RecordsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutUserInput | RecordsCreateOrConnectWithoutUserInput[]
    upsert?: RecordsUpsertWithWhereUniqueWithoutUserInput | RecordsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecordsCreateManyUserInputEnvelope
    set?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    disconnect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    delete?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    update?: RecordsUpdateWithWhereUniqueWithoutUserInput | RecordsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecordsUpdateManyWithWhereWithoutUserInput | RecordsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecordsScalarWhereInput | RecordsScalarWhereInput[]
  }

  export type PurhasesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurhasesCreateWithoutUserInput, PurhasesUncheckedCreateWithoutUserInput> | PurhasesCreateWithoutUserInput[] | PurhasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurhasesCreateOrConnectWithoutUserInput | PurhasesCreateOrConnectWithoutUserInput[]
    upsert?: PurhasesUpsertWithWhereUniqueWithoutUserInput | PurhasesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurhasesCreateManyUserInputEnvelope
    set?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
    disconnect?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
    delete?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
    connect?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
    update?: PurhasesUpdateWithWhereUniqueWithoutUserInput | PurhasesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurhasesUpdateManyWithWhereWithoutUserInput | PurhasesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurhasesScalarWhereInput | PurhasesScalarWhereInput[]
  }

  export type ProductsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type configCreateNestedManyWithoutCategorieInput = {
    create?: XOR<configCreateWithoutCategorieInput, configUncheckedCreateWithoutCategorieInput> | configCreateWithoutCategorieInput[] | configUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: configCreateOrConnectWithoutCategorieInput | configCreateOrConnectWithoutCategorieInput[]
    createMany?: configCreateManyCategorieInputEnvelope
    connect?: configWhereUniqueInput | configWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type configUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<configCreateWithoutCategorieInput, configUncheckedCreateWithoutCategorieInput> | configCreateWithoutCategorieInput[] | configUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: configCreateOrConnectWithoutCategorieInput | configCreateOrConnectWithoutCategorieInput[]
    createMany?: configCreateManyCategorieInputEnvelope
    connect?: configWhereUniqueInput | configWhereUniqueInput[]
  }

  export type ProductsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoriesInput | ProductsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoriesInput | ProductsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoriesInput | ProductsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type configUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<configCreateWithoutCategorieInput, configUncheckedCreateWithoutCategorieInput> | configCreateWithoutCategorieInput[] | configUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: configCreateOrConnectWithoutCategorieInput | configCreateOrConnectWithoutCategorieInput[]
    upsert?: configUpsertWithWhereUniqueWithoutCategorieInput | configUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: configCreateManyCategorieInputEnvelope
    set?: configWhereUniqueInput | configWhereUniqueInput[]
    disconnect?: configWhereUniqueInput | configWhereUniqueInput[]
    delete?: configWhereUniqueInput | configWhereUniqueInput[]
    connect?: configWhereUniqueInput | configWhereUniqueInput[]
    update?: configUpdateWithWhereUniqueWithoutCategorieInput | configUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: configUpdateManyWithWhereWithoutCategorieInput | configUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: configScalarWhereInput | configScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoriesInput | ProductsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoriesInput | ProductsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoriesInput | ProductsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type configUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<configCreateWithoutCategorieInput, configUncheckedCreateWithoutCategorieInput> | configCreateWithoutCategorieInput[] | configUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: configCreateOrConnectWithoutCategorieInput | configCreateOrConnectWithoutCategorieInput[]
    upsert?: configUpsertWithWhereUniqueWithoutCategorieInput | configUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: configCreateManyCategorieInputEnvelope
    set?: configWhereUniqueInput | configWhereUniqueInput[]
    disconnect?: configWhereUniqueInput | configWhereUniqueInput[]
    delete?: configWhereUniqueInput | configWhereUniqueInput[]
    connect?: configWhereUniqueInput | configWhereUniqueInput[]
    update?: configUpdateWithWhereUniqueWithoutCategorieInput | configUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: configUpdateManyWithWhereWithoutCategorieInput | configUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: configScalarWhereInput | configScalarWhereInput[]
  }

  export type ProductsCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ProductsCreateWithoutSupplierInput, ProductsUncheckedCreateWithoutSupplierInput> | ProductsCreateWithoutSupplierInput[] | ProductsUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSupplierInput | ProductsCreateOrConnectWithoutSupplierInput[]
    createMany?: ProductsCreateManySupplierInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ProductsCreateWithoutSupplierInput, ProductsUncheckedCreateWithoutSupplierInput> | ProductsCreateWithoutSupplierInput[] | ProductsUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSupplierInput | ProductsCreateOrConnectWithoutSupplierInput[]
    createMany?: ProductsCreateManySupplierInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ProductsCreateWithoutSupplierInput, ProductsUncheckedCreateWithoutSupplierInput> | ProductsCreateWithoutSupplierInput[] | ProductsUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSupplierInput | ProductsCreateOrConnectWithoutSupplierInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutSupplierInput | ProductsUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ProductsCreateManySupplierInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutSupplierInput | ProductsUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutSupplierInput | ProductsUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ProductsCreateWithoutSupplierInput, ProductsUncheckedCreateWithoutSupplierInput> | ProductsCreateWithoutSupplierInput[] | ProductsUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSupplierInput | ProductsCreateOrConnectWithoutSupplierInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutSupplierInput | ProductsUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ProductsCreateManySupplierInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutSupplierInput | ProductsUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutSupplierInput | ProductsUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsCreateslugsInput = {
    set: string[]
  }

  export type ProductsCreateslugs_urlInput = {
    set: string[]
  }

  export type SuppliersCreateNestedOneWithoutProductsInput = {
    create?: XOR<SuppliersCreateWithoutProductsInput, SuppliersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SuppliersCreateOrConnectWithoutProductsInput
    connect?: SuppliersWhereUniqueInput
  }

  export type CategoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput
    connect?: CategoriesWhereUniqueInput
  }

  export type RecordsCreateNestedManyWithoutProductListInput = {
    create?: XOR<RecordsCreateWithoutProductListInput, RecordsUncheckedCreateWithoutProductListInput> | RecordsCreateWithoutProductListInput[] | RecordsUncheckedCreateWithoutProductListInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutProductListInput | RecordsCreateOrConnectWithoutProductListInput[]
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
  }

  export type PurhasesCreateNestedManyWithoutProductsInput = {
    create?: XOR<PurhasesCreateWithoutProductsInput, PurhasesUncheckedCreateWithoutProductsInput> | PurhasesCreateWithoutProductsInput[] | PurhasesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: PurhasesCreateOrConnectWithoutProductsInput | PurhasesCreateOrConnectWithoutProductsInput[]
    connect?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
  }

  export type RecordsUncheckedCreateNestedManyWithoutProductListInput = {
    create?: XOR<RecordsCreateWithoutProductListInput, RecordsUncheckedCreateWithoutProductListInput> | RecordsCreateWithoutProductListInput[] | RecordsUncheckedCreateWithoutProductListInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutProductListInput | RecordsCreateOrConnectWithoutProductListInput[]
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
  }

  export type PurhasesUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<PurhasesCreateWithoutProductsInput, PurhasesUncheckedCreateWithoutProductsInput> | PurhasesCreateWithoutProductsInput[] | PurhasesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: PurhasesCreateOrConnectWithoutProductsInput | PurhasesCreateOrConnectWithoutProductsInput[]
    connect?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsUpdateslugsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductsUpdateslugs_urlInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SuppliersUpdateOneWithoutProductsNestedInput = {
    create?: XOR<SuppliersCreateWithoutProductsInput, SuppliersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SuppliersCreateOrConnectWithoutProductsInput
    upsert?: SuppliersUpsertWithoutProductsInput
    disconnect?: SuppliersWhereInput | boolean
    delete?: SuppliersWhereInput | boolean
    connect?: SuppliersWhereUniqueInput
    update?: XOR<XOR<SuppliersUpdateToOneWithWhereWithoutProductsInput, SuppliersUpdateWithoutProductsInput>, SuppliersUncheckedUpdateWithoutProductsInput>
  }

  export type CategoriesUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput
    upsert?: CategoriesUpsertWithoutProductsInput
    disconnect?: CategoriesWhereInput | boolean
    delete?: CategoriesWhereInput | boolean
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutProductsInput, CategoriesUpdateWithoutProductsInput>, CategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type RecordsUpdateManyWithoutProductListNestedInput = {
    create?: XOR<RecordsCreateWithoutProductListInput, RecordsUncheckedCreateWithoutProductListInput> | RecordsCreateWithoutProductListInput[] | RecordsUncheckedCreateWithoutProductListInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutProductListInput | RecordsCreateOrConnectWithoutProductListInput[]
    upsert?: RecordsUpsertWithWhereUniqueWithoutProductListInput | RecordsUpsertWithWhereUniqueWithoutProductListInput[]
    set?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    disconnect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    delete?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    update?: RecordsUpdateWithWhereUniqueWithoutProductListInput | RecordsUpdateWithWhereUniqueWithoutProductListInput[]
    updateMany?: RecordsUpdateManyWithWhereWithoutProductListInput | RecordsUpdateManyWithWhereWithoutProductListInput[]
    deleteMany?: RecordsScalarWhereInput | RecordsScalarWhereInput[]
  }

  export type PurhasesUpdateManyWithoutProductsNestedInput = {
    create?: XOR<PurhasesCreateWithoutProductsInput, PurhasesUncheckedCreateWithoutProductsInput> | PurhasesCreateWithoutProductsInput[] | PurhasesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: PurhasesCreateOrConnectWithoutProductsInput | PurhasesCreateOrConnectWithoutProductsInput[]
    upsert?: PurhasesUpsertWithWhereUniqueWithoutProductsInput | PurhasesUpsertWithWhereUniqueWithoutProductsInput[]
    set?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
    disconnect?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
    delete?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
    connect?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
    update?: PurhasesUpdateWithWhereUniqueWithoutProductsInput | PurhasesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: PurhasesUpdateManyWithWhereWithoutProductsInput | PurhasesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: PurhasesScalarWhereInput | PurhasesScalarWhereInput[]
  }

  export type RecordsUncheckedUpdateManyWithoutProductListNestedInput = {
    create?: XOR<RecordsCreateWithoutProductListInput, RecordsUncheckedCreateWithoutProductListInput> | RecordsCreateWithoutProductListInput[] | RecordsUncheckedCreateWithoutProductListInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutProductListInput | RecordsCreateOrConnectWithoutProductListInput[]
    upsert?: RecordsUpsertWithWhereUniqueWithoutProductListInput | RecordsUpsertWithWhereUniqueWithoutProductListInput[]
    set?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    disconnect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    delete?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    update?: RecordsUpdateWithWhereUniqueWithoutProductListInput | RecordsUpdateWithWhereUniqueWithoutProductListInput[]
    updateMany?: RecordsUpdateManyWithWhereWithoutProductListInput | RecordsUpdateManyWithWhereWithoutProductListInput[]
    deleteMany?: RecordsScalarWhereInput | RecordsScalarWhereInput[]
  }

  export type PurhasesUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<PurhasesCreateWithoutProductsInput, PurhasesUncheckedCreateWithoutProductsInput> | PurhasesCreateWithoutProductsInput[] | PurhasesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: PurhasesCreateOrConnectWithoutProductsInput | PurhasesCreateOrConnectWithoutProductsInput[]
    upsert?: PurhasesUpsertWithWhereUniqueWithoutProductsInput | PurhasesUpsertWithWhereUniqueWithoutProductsInput[]
    set?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
    disconnect?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
    delete?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
    connect?: PurhasesWhereUniqueInput | PurhasesWhereUniqueInput[]
    update?: PurhasesUpdateWithWhereUniqueWithoutProductsInput | PurhasesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: PurhasesUpdateManyWithWhereWithoutProductsInput | PurhasesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: PurhasesScalarWhereInput | PurhasesScalarWhereInput[]
  }

  export type ProductsCreateNestedManyWithoutRecordsInput = {
    create?: XOR<ProductsCreateWithoutRecordsInput, ProductsUncheckedCreateWithoutRecordsInput> | ProductsCreateWithoutRecordsInput[] | ProductsUncheckedCreateWithoutRecordsInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutRecordsInput | ProductsCreateOrConnectWithoutRecordsInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutRecordsInput = {
    create?: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductsUncheckedCreateNestedManyWithoutRecordsInput = {
    create?: XOR<ProductsCreateWithoutRecordsInput, ProductsUncheckedCreateWithoutRecordsInput> | ProductsCreateWithoutRecordsInput[] | ProductsUncheckedCreateWithoutRecordsInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutRecordsInput | ProductsCreateOrConnectWithoutRecordsInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUpdateManyWithoutRecordsNestedInput = {
    create?: XOR<ProductsCreateWithoutRecordsInput, ProductsUncheckedCreateWithoutRecordsInput> | ProductsCreateWithoutRecordsInput[] | ProductsUncheckedCreateWithoutRecordsInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutRecordsInput | ProductsCreateOrConnectWithoutRecordsInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutRecordsInput | ProductsUpsertWithWhereUniqueWithoutRecordsInput[]
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutRecordsInput | ProductsUpdateWithWhereUniqueWithoutRecordsInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutRecordsInput | ProductsUpdateManyWithWhereWithoutRecordsInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type UserUpdateOneWithoutRecordsNestedInput = {
    create?: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsInput
    upsert?: UserUpsertWithoutRecordsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecordsInput, UserUpdateWithoutRecordsInput>, UserUncheckedUpdateWithoutRecordsInput>
  }

  export type ProductsUncheckedUpdateManyWithoutRecordsNestedInput = {
    create?: XOR<ProductsCreateWithoutRecordsInput, ProductsUncheckedCreateWithoutRecordsInput> | ProductsCreateWithoutRecordsInput[] | ProductsUncheckedCreateWithoutRecordsInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutRecordsInput | ProductsCreateOrConnectWithoutRecordsInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutRecordsInput | ProductsUpsertWithWhereUniqueWithoutRecordsInput[]
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutRecordsInput | ProductsUpdateWithWhereUniqueWithoutRecordsInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutRecordsInput | ProductsUpdateManyWithWhereWithoutRecordsInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type PurhasesCreatetotal_purchase_amoutInput = {
    set: number[]
  }

  export type ProductsCreateNestedManyWithoutPurhasesInput = {
    create?: XOR<ProductsCreateWithoutPurhasesInput, ProductsUncheckedCreateWithoutPurhasesInput> | ProductsCreateWithoutPurhasesInput[] | ProductsUncheckedCreateWithoutPurhasesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutPurhasesInput | ProductsCreateOrConnectWithoutPurhasesInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPurhasesInput = {
    create?: XOR<UserCreateWithoutPurhasesInput, UserUncheckedCreateWithoutPurhasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurhasesInput
    connect?: UserWhereUniqueInput
  }

  export type ProductsUncheckedCreateNestedManyWithoutPurhasesInput = {
    create?: XOR<ProductsCreateWithoutPurhasesInput, ProductsUncheckedCreateWithoutPurhasesInput> | ProductsCreateWithoutPurhasesInput[] | ProductsUncheckedCreateWithoutPurhasesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutPurhasesInput | ProductsCreateOrConnectWithoutPurhasesInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type PurhasesUpdatetotal_purchase_amoutInput = {
    set?: number[]
    push?: number | number[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsUpdateManyWithoutPurhasesNestedInput = {
    create?: XOR<ProductsCreateWithoutPurhasesInput, ProductsUncheckedCreateWithoutPurhasesInput> | ProductsCreateWithoutPurhasesInput[] | ProductsUncheckedCreateWithoutPurhasesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutPurhasesInput | ProductsCreateOrConnectWithoutPurhasesInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutPurhasesInput | ProductsUpsertWithWhereUniqueWithoutPurhasesInput[]
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutPurhasesInput | ProductsUpdateWithWhereUniqueWithoutPurhasesInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutPurhasesInput | ProductsUpdateManyWithWhereWithoutPurhasesInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type UserUpdateOneWithoutPurhasesNestedInput = {
    create?: XOR<UserCreateWithoutPurhasesInput, UserUncheckedCreateWithoutPurhasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurhasesInput
    upsert?: UserUpsertWithoutPurhasesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurhasesInput, UserUpdateWithoutPurhasesInput>, UserUncheckedUpdateWithoutPurhasesInput>
  }

  export type ProductsUncheckedUpdateManyWithoutPurhasesNestedInput = {
    create?: XOR<ProductsCreateWithoutPurhasesInput, ProductsUncheckedCreateWithoutPurhasesInput> | ProductsCreateWithoutPurhasesInput[] | ProductsUncheckedCreateWithoutPurhasesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutPurhasesInput | ProductsCreateOrConnectWithoutPurhasesInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutPurhasesInput | ProductsUpsertWithWhereUniqueWithoutPurhasesInput[]
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutPurhasesInput | ProductsUpdateWithWhereUniqueWithoutPurhasesInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutPurhasesInput | ProductsUpdateManyWithWhereWithoutPurhasesInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type CategoriesCreateNestedOneWithoutConfigInput = {
    create?: XOR<CategoriesCreateWithoutConfigInput, CategoriesUncheckedCreateWithoutConfigInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutConfigInput
    connect?: CategoriesWhereUniqueInput
  }

  export type CategoriesUpdateOneWithoutConfigNestedInput = {
    create?: XOR<CategoriesCreateWithoutConfigInput, CategoriesUncheckedCreateWithoutConfigInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutConfigInput
    upsert?: CategoriesUpsertWithoutConfigInput
    disconnect?: CategoriesWhereInput | boolean
    delete?: CategoriesWhereInput | boolean
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutConfigInput, CategoriesUpdateWithoutConfigInput>, CategoriesUncheckedUpdateWithoutConfigInput>
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type RecordsCreateWithoutUserInput = {
    product_id?: number | null
    quantity: number
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productList?: ProductsCreateNestedManyWithoutRecordsInput
  }

  export type RecordsUncheckedCreateWithoutUserInput = {
    id?: number
    product_id?: number | null
    quantity: number
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productList?: ProductsUncheckedCreateNestedManyWithoutRecordsInput
  }

  export type RecordsCreateOrConnectWithoutUserInput = {
    where: RecordsWhereUniqueInput
    create: XOR<RecordsCreateWithoutUserInput, RecordsUncheckedCreateWithoutUserInput>
  }

  export type RecordsCreateManyUserInputEnvelope = {
    data: RecordsCreateManyUserInput | RecordsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PurhasesCreateWithoutUserInput = {
    total_purchase_amout?: PurhasesCreatetotal_purchase_amoutInput | number[]
    dolar_amout?: number | null
    date_credit?: number | null
    reference?: string | null
    quantity: number
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductsCreateNestedManyWithoutPurhasesInput
  }

  export type PurhasesUncheckedCreateWithoutUserInput = {
    id?: number
    total_purchase_amout?: PurhasesCreatetotal_purchase_amoutInput | number[]
    dolar_amout?: number | null
    date_credit?: number | null
    reference?: string | null
    quantity: number
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductsUncheckedCreateNestedManyWithoutPurhasesInput
  }

  export type PurhasesCreateOrConnectWithoutUserInput = {
    where: PurhasesWhereUniqueInput
    create: XOR<PurhasesCreateWithoutUserInput, PurhasesUncheckedCreateWithoutUserInput>
  }

  export type PurhasesCreateManyUserInputEnvelope = {
    data: PurhasesCreateManyUserInput | PurhasesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecordsUpsertWithWhereUniqueWithoutUserInput = {
    where: RecordsWhereUniqueInput
    update: XOR<RecordsUpdateWithoutUserInput, RecordsUncheckedUpdateWithoutUserInput>
    create: XOR<RecordsCreateWithoutUserInput, RecordsUncheckedCreateWithoutUserInput>
  }

  export type RecordsUpdateWithWhereUniqueWithoutUserInput = {
    where: RecordsWhereUniqueInput
    data: XOR<RecordsUpdateWithoutUserInput, RecordsUncheckedUpdateWithoutUserInput>
  }

  export type RecordsUpdateManyWithWhereWithoutUserInput = {
    where: RecordsScalarWhereInput
    data: XOR<RecordsUpdateManyMutationInput, RecordsUncheckedUpdateManyWithoutUserInput>
  }

  export type RecordsScalarWhereInput = {
    AND?: RecordsScalarWhereInput | RecordsScalarWhereInput[]
    OR?: RecordsScalarWhereInput[]
    NOT?: RecordsScalarWhereInput | RecordsScalarWhereInput[]
    id?: IntFilter<"Records"> | number
    user_id?: StringNullableFilter<"Records"> | string | null
    product_id?: IntNullableFilter<"Records"> | number | null
    quantity?: IntFilter<"Records"> | number
    status?: BoolNullableFilter<"Records"> | boolean | null
    createdAt?: DateTimeFilter<"Records"> | Date | string
    updatedAt?: DateTimeFilter<"Records"> | Date | string
  }

  export type PurhasesUpsertWithWhereUniqueWithoutUserInput = {
    where: PurhasesWhereUniqueInput
    update: XOR<PurhasesUpdateWithoutUserInput, PurhasesUncheckedUpdateWithoutUserInput>
    create: XOR<PurhasesCreateWithoutUserInput, PurhasesUncheckedCreateWithoutUserInput>
  }

  export type PurhasesUpdateWithWhereUniqueWithoutUserInput = {
    where: PurhasesWhereUniqueInput
    data: XOR<PurhasesUpdateWithoutUserInput, PurhasesUncheckedUpdateWithoutUserInput>
  }

  export type PurhasesUpdateManyWithWhereWithoutUserInput = {
    where: PurhasesScalarWhereInput
    data: XOR<PurhasesUpdateManyMutationInput, PurhasesUncheckedUpdateManyWithoutUserInput>
  }

  export type PurhasesScalarWhereInput = {
    AND?: PurhasesScalarWhereInput | PurhasesScalarWhereInput[]
    OR?: PurhasesScalarWhereInput[]
    NOT?: PurhasesScalarWhereInput | PurhasesScalarWhereInput[]
    id?: IntFilter<"Purhases"> | number
    user_id?: StringNullableFilter<"Purhases"> | string | null
    total_purchase_amout?: FloatNullableListFilter<"Purhases">
    dolar_amout?: FloatNullableFilter<"Purhases"> | number | null
    date_credit?: IntNullableFilter<"Purhases"> | number | null
    reference?: StringNullableFilter<"Purhases"> | string | null
    quantity?: IntFilter<"Purhases"> | number
    status?: BoolNullableFilter<"Purhases"> | boolean | null
    createdAt?: DateTimeFilter<"Purhases"> | Date | string
    updatedAt?: DateTimeFilter<"Purhases"> | Date | string
  }

  export type ProductsCreateWithoutCategoriesInput = {
    name: string
    stock: number
    status?: boolean | null
    price: number
    price_ent: number
    slugs?: ProductsCreateslugsInput | string[]
    slugs_url?: ProductsCreateslugs_urlInput | string[]
    images?: string | null
    Brand?: string | null
    bundle?: number | null
    expiration?: Date | string | null
    unity?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplier?: SuppliersCreateNestedOneWithoutProductsInput
    Records?: RecordsCreateNestedManyWithoutProductListInput
    Purhases?: PurhasesCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    stock: number
    status?: boolean | null
    price: number
    price_ent: number
    slugs?: ProductsCreateslugsInput | string[]
    slugs_url?: ProductsCreateslugs_urlInput | string[]
    images?: string | null
    Brand?: string | null
    bundle?: number | null
    expiration?: Date | string | null
    unity?: string | null
    supplier_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Records?: RecordsUncheckedCreateNestedManyWithoutProductListInput
    Purhases?: PurhasesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutCategoriesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductsCreateManyCategoriesInputEnvelope = {
    data: ProductsCreateManyCategoriesInput | ProductsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type configCreateWithoutCategorieInput = {
    dolar: number
    useIva?: boolean | null
    autoPrice?: boolean | null
    profit?: number
    roundPrice?: boolean | null
    threshold?: number | null
    defafult_currency?: string | null
    expiration_default?: number | null
    bundle_discount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type configUncheckedCreateWithoutCategorieInput = {
    id?: number
    dolar: number
    useIva?: boolean | null
    autoPrice?: boolean | null
    profit?: number
    roundPrice?: boolean | null
    threshold?: number | null
    defafult_currency?: string | null
    expiration_default?: number | null
    bundle_discount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type configCreateOrConnectWithoutCategorieInput = {
    where: configWhereUniqueInput
    create: XOR<configCreateWithoutCategorieInput, configUncheckedCreateWithoutCategorieInput>
  }

  export type configCreateManyCategorieInputEnvelope = {
    data: configCreateManyCategorieInput | configCreateManyCategorieInput[]
    skipDuplicates?: boolean
  }

  export type ProductsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutCategoriesInput, ProductsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutCategoriesInput, ProductsUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductsUpdateManyWithWhereWithoutCategoriesInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    id?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    stock?: IntFilter<"Products"> | number
    status?: BoolNullableFilter<"Products"> | boolean | null
    price?: FloatFilter<"Products"> | number
    price_ent?: FloatFilter<"Products"> | number
    slugs?: StringNullableListFilter<"Products">
    slugs_url?: StringNullableListFilter<"Products">
    images?: StringNullableFilter<"Products"> | string | null
    Brand?: StringNullableFilter<"Products"> | string | null
    bundle?: IntNullableFilter<"Products"> | number | null
    expiration?: DateTimeNullableFilter<"Products"> | Date | string | null
    unity?: StringNullableFilter<"Products"> | string | null
    supplier_id?: IntNullableFilter<"Products"> | number | null
    category_id?: IntNullableFilter<"Products"> | number | null
    createdAt?: DateTimeFilter<"Products"> | Date | string
    updatedAt?: DateTimeFilter<"Products"> | Date | string
  }

  export type configUpsertWithWhereUniqueWithoutCategorieInput = {
    where: configWhereUniqueInput
    update: XOR<configUpdateWithoutCategorieInput, configUncheckedUpdateWithoutCategorieInput>
    create: XOR<configCreateWithoutCategorieInput, configUncheckedCreateWithoutCategorieInput>
  }

  export type configUpdateWithWhereUniqueWithoutCategorieInput = {
    where: configWhereUniqueInput
    data: XOR<configUpdateWithoutCategorieInput, configUncheckedUpdateWithoutCategorieInput>
  }

  export type configUpdateManyWithWhereWithoutCategorieInput = {
    where: configScalarWhereInput
    data: XOR<configUpdateManyMutationInput, configUncheckedUpdateManyWithoutCategorieInput>
  }

  export type configScalarWhereInput = {
    AND?: configScalarWhereInput | configScalarWhereInput[]
    OR?: configScalarWhereInput[]
    NOT?: configScalarWhereInput | configScalarWhereInput[]
    id?: IntFilter<"config"> | number
    dolar?: FloatFilter<"config"> | number
    useIva?: BoolNullableFilter<"config"> | boolean | null
    autoPrice?: BoolNullableFilter<"config"> | boolean | null
    profit?: FloatFilter<"config"> | number
    roundPrice?: BoolNullableFilter<"config"> | boolean | null
    default_categories_id?: IntNullableFilter<"config"> | number | null
    threshold?: IntNullableFilter<"config"> | number | null
    defafult_currency?: StringNullableFilter<"config"> | string | null
    expiration_default?: IntNullableFilter<"config"> | number | null
    bundle_discount?: FloatNullableFilter<"config"> | number | null
    createdAt?: DateTimeFilter<"config"> | Date | string
    updatedAt?: DateTimeFilter<"config"> | Date | string
  }

  export type ProductsCreateWithoutSupplierInput = {
    name: string
    stock: number
    status?: boolean | null
    price: number
    price_ent: number
    slugs?: ProductsCreateslugsInput | string[]
    slugs_url?: ProductsCreateslugs_urlInput | string[]
    images?: string | null
    Brand?: string | null
    bundle?: number | null
    expiration?: Date | string | null
    unity?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Categories?: CategoriesCreateNestedOneWithoutProductsInput
    Records?: RecordsCreateNestedManyWithoutProductListInput
    Purhases?: PurhasesCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutSupplierInput = {
    id?: number
    name: string
    stock: number
    status?: boolean | null
    price: number
    price_ent: number
    slugs?: ProductsCreateslugsInput | string[]
    slugs_url?: ProductsCreateslugs_urlInput | string[]
    images?: string | null
    Brand?: string | null
    bundle?: number | null
    expiration?: Date | string | null
    unity?: string | null
    category_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Records?: RecordsUncheckedCreateNestedManyWithoutProductListInput
    Purhases?: PurhasesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutSupplierInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutSupplierInput, ProductsUncheckedCreateWithoutSupplierInput>
  }

  export type ProductsCreateManySupplierInputEnvelope = {
    data: ProductsCreateManySupplierInput | ProductsCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type ProductsUpsertWithWhereUniqueWithoutSupplierInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutSupplierInput, ProductsUncheckedUpdateWithoutSupplierInput>
    create: XOR<ProductsCreateWithoutSupplierInput, ProductsUncheckedCreateWithoutSupplierInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutSupplierInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutSupplierInput, ProductsUncheckedUpdateWithoutSupplierInput>
  }

  export type ProductsUpdateManyWithWhereWithoutSupplierInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutSupplierInput>
  }

  export type SuppliersCreateWithoutProductsInput = {
    name: string
    company?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zip?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuppliersUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    company?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zip?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuppliersCreateOrConnectWithoutProductsInput = {
    where: SuppliersWhereUniqueInput
    create: XOR<SuppliersCreateWithoutProductsInput, SuppliersUncheckedCreateWithoutProductsInput>
  }

  export type CategoriesCreateWithoutProductsInput = {
    name: string
    slug_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    config?: configCreateNestedManyWithoutCategorieInput
  }

  export type CategoriesUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    slug_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    config?: configUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type CategoriesCreateOrConnectWithoutProductsInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
  }

  export type RecordsCreateWithoutProductListInput = {
    product_id?: number | null
    quantity: number
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutRecordsInput
  }

  export type RecordsUncheckedCreateWithoutProductListInput = {
    id?: number
    user_id?: string | null
    product_id?: number | null
    quantity: number
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecordsCreateOrConnectWithoutProductListInput = {
    where: RecordsWhereUniqueInput
    create: XOR<RecordsCreateWithoutProductListInput, RecordsUncheckedCreateWithoutProductListInput>
  }

  export type PurhasesCreateWithoutProductsInput = {
    total_purchase_amout?: PurhasesCreatetotal_purchase_amoutInput | number[]
    dolar_amout?: number | null
    date_credit?: number | null
    reference?: string | null
    quantity: number
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutPurhasesInput
  }

  export type PurhasesUncheckedCreateWithoutProductsInput = {
    id?: number
    user_id?: string | null
    total_purchase_amout?: PurhasesCreatetotal_purchase_amoutInput | number[]
    dolar_amout?: number | null
    date_credit?: number | null
    reference?: string | null
    quantity: number
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurhasesCreateOrConnectWithoutProductsInput = {
    where: PurhasesWhereUniqueInput
    create: XOR<PurhasesCreateWithoutProductsInput, PurhasesUncheckedCreateWithoutProductsInput>
  }

  export type SuppliersUpsertWithoutProductsInput = {
    update: XOR<SuppliersUpdateWithoutProductsInput, SuppliersUncheckedUpdateWithoutProductsInput>
    create: XOR<SuppliersCreateWithoutProductsInput, SuppliersUncheckedCreateWithoutProductsInput>
    where?: SuppliersWhereInput
  }

  export type SuppliersUpdateToOneWithWhereWithoutProductsInput = {
    where?: SuppliersWhereInput
    data: XOR<SuppliersUpdateWithoutProductsInput, SuppliersUncheckedUpdateWithoutProductsInput>
  }

  export type SuppliersUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuppliersUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUpsertWithoutProductsInput = {
    update: XOR<CategoriesUpdateWithoutProductsInput, CategoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutProductsInput, CategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type CategoriesUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    config?: configUpdateManyWithoutCategorieNestedInput
  }

  export type CategoriesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    config?: configUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type RecordsUpsertWithWhereUniqueWithoutProductListInput = {
    where: RecordsWhereUniqueInput
    update: XOR<RecordsUpdateWithoutProductListInput, RecordsUncheckedUpdateWithoutProductListInput>
    create: XOR<RecordsCreateWithoutProductListInput, RecordsUncheckedCreateWithoutProductListInput>
  }

  export type RecordsUpdateWithWhereUniqueWithoutProductListInput = {
    where: RecordsWhereUniqueInput
    data: XOR<RecordsUpdateWithoutProductListInput, RecordsUncheckedUpdateWithoutProductListInput>
  }

  export type RecordsUpdateManyWithWhereWithoutProductListInput = {
    where: RecordsScalarWhereInput
    data: XOR<RecordsUpdateManyMutationInput, RecordsUncheckedUpdateManyWithoutProductListInput>
  }

  export type PurhasesUpsertWithWhereUniqueWithoutProductsInput = {
    where: PurhasesWhereUniqueInput
    update: XOR<PurhasesUpdateWithoutProductsInput, PurhasesUncheckedUpdateWithoutProductsInput>
    create: XOR<PurhasesCreateWithoutProductsInput, PurhasesUncheckedCreateWithoutProductsInput>
  }

  export type PurhasesUpdateWithWhereUniqueWithoutProductsInput = {
    where: PurhasesWhereUniqueInput
    data: XOR<PurhasesUpdateWithoutProductsInput, PurhasesUncheckedUpdateWithoutProductsInput>
  }

  export type PurhasesUpdateManyWithWhereWithoutProductsInput = {
    where: PurhasesScalarWhereInput
    data: XOR<PurhasesUpdateManyMutationInput, PurhasesUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductsCreateWithoutRecordsInput = {
    name: string
    stock: number
    status?: boolean | null
    price: number
    price_ent: number
    slugs?: ProductsCreateslugsInput | string[]
    slugs_url?: ProductsCreateslugs_urlInput | string[]
    images?: string | null
    Brand?: string | null
    bundle?: number | null
    expiration?: Date | string | null
    unity?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplier?: SuppliersCreateNestedOneWithoutProductsInput
    Categories?: CategoriesCreateNestedOneWithoutProductsInput
    Purhases?: PurhasesCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutRecordsInput = {
    id?: number
    name: string
    stock: number
    status?: boolean | null
    price: number
    price_ent: number
    slugs?: ProductsCreateslugsInput | string[]
    slugs_url?: ProductsCreateslugs_urlInput | string[]
    images?: string | null
    Brand?: string | null
    bundle?: number | null
    expiration?: Date | string | null
    unity?: string | null
    supplier_id?: number | null
    category_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Purhases?: PurhasesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutRecordsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutRecordsInput, ProductsUncheckedCreateWithoutRecordsInput>
  }

  export type UserCreateWithoutRecordsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Purhases?: PurhasesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecordsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Purhases?: PurhasesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
  }

  export type ProductsUpsertWithWhereUniqueWithoutRecordsInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutRecordsInput, ProductsUncheckedUpdateWithoutRecordsInput>
    create: XOR<ProductsCreateWithoutRecordsInput, ProductsUncheckedCreateWithoutRecordsInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutRecordsInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutRecordsInput, ProductsUncheckedUpdateWithoutRecordsInput>
  }

  export type ProductsUpdateManyWithWhereWithoutRecordsInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutRecordsInput>
  }

  export type UserUpsertWithoutRecordsInput = {
    update: XOR<UserUpdateWithoutRecordsInput, UserUncheckedUpdateWithoutRecordsInput>
    create: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecordsInput, UserUncheckedUpdateWithoutRecordsInput>
  }

  export type UserUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Purhases?: PurhasesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Purhases?: PurhasesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductsCreateWithoutPurhasesInput = {
    name: string
    stock: number
    status?: boolean | null
    price: number
    price_ent: number
    slugs?: ProductsCreateslugsInput | string[]
    slugs_url?: ProductsCreateslugs_urlInput | string[]
    images?: string | null
    Brand?: string | null
    bundle?: number | null
    expiration?: Date | string | null
    unity?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplier?: SuppliersCreateNestedOneWithoutProductsInput
    Categories?: CategoriesCreateNestedOneWithoutProductsInput
    Records?: RecordsCreateNestedManyWithoutProductListInput
  }

  export type ProductsUncheckedCreateWithoutPurhasesInput = {
    id?: number
    name: string
    stock: number
    status?: boolean | null
    price: number
    price_ent: number
    slugs?: ProductsCreateslugsInput | string[]
    slugs_url?: ProductsCreateslugs_urlInput | string[]
    images?: string | null
    Brand?: string | null
    bundle?: number | null
    expiration?: Date | string | null
    unity?: string | null
    supplier_id?: number | null
    category_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Records?: RecordsUncheckedCreateNestedManyWithoutProductListInput
  }

  export type ProductsCreateOrConnectWithoutPurhasesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutPurhasesInput, ProductsUncheckedCreateWithoutPurhasesInput>
  }

  export type UserCreateWithoutPurhasesInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Records?: RecordsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurhasesInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Records?: RecordsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurhasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurhasesInput, UserUncheckedCreateWithoutPurhasesInput>
  }

  export type ProductsUpsertWithWhereUniqueWithoutPurhasesInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutPurhasesInput, ProductsUncheckedUpdateWithoutPurhasesInput>
    create: XOR<ProductsCreateWithoutPurhasesInput, ProductsUncheckedCreateWithoutPurhasesInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutPurhasesInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutPurhasesInput, ProductsUncheckedUpdateWithoutPurhasesInput>
  }

  export type ProductsUpdateManyWithWhereWithoutPurhasesInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutPurhasesInput>
  }

  export type UserUpsertWithoutPurhasesInput = {
    update: XOR<UserUpdateWithoutPurhasesInput, UserUncheckedUpdateWithoutPurhasesInput>
    create: XOR<UserCreateWithoutPurhasesInput, UserUncheckedCreateWithoutPurhasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurhasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurhasesInput, UserUncheckedUpdateWithoutPurhasesInput>
  }

  export type UserUpdateWithoutPurhasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Records?: RecordsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurhasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Records?: RecordsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoriesCreateWithoutConfigInput = {
    name: string
    slug_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Products?: ProductsCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUncheckedCreateWithoutConfigInput = {
    id?: number
    name: string
    slug_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Products?: ProductsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesCreateOrConnectWithoutConfigInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutConfigInput, CategoriesUncheckedCreateWithoutConfigInput>
  }

  export type CategoriesUpsertWithoutConfigInput = {
    update: XOR<CategoriesUpdateWithoutConfigInput, CategoriesUncheckedUpdateWithoutConfigInput>
    create: XOR<CategoriesCreateWithoutConfigInput, CategoriesUncheckedCreateWithoutConfigInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutConfigInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutConfigInput, CategoriesUncheckedUpdateWithoutConfigInput>
  }

  export type CategoriesUpdateWithoutConfigInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Products?: ProductsUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesUncheckedUpdateWithoutConfigInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Products?: ProductsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type RecordsCreateManyUserInput = {
    id?: number
    product_id?: number | null
    quantity: number
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurhasesCreateManyUserInput = {
    id?: number
    total_purchase_amout?: PurhasesCreatetotal_purchase_amoutInput | number[]
    dolar_amout?: number | null
    date_credit?: number | null
    reference?: string | null
    quantity: number
    status?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecordsUpdateWithoutUserInput = {
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productList?: ProductsUpdateManyWithoutRecordsNestedInput
  }

  export type RecordsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productList?: ProductsUncheckedUpdateManyWithoutRecordsNestedInput
  }

  export type RecordsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurhasesUpdateWithoutUserInput = {
    total_purchase_amout?: PurhasesUpdatetotal_purchase_amoutInput | number[]
    dolar_amout?: NullableFloatFieldUpdateOperationsInput | number | null
    date_credit?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUpdateManyWithoutPurhasesNestedInput
  }

  export type PurhasesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_purchase_amout?: PurhasesUpdatetotal_purchase_amoutInput | number[]
    dolar_amout?: NullableFloatFieldUpdateOperationsInput | number | null
    date_credit?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUncheckedUpdateManyWithoutPurhasesNestedInput
  }

  export type PurhasesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_purchase_amout?: PurhasesUpdatetotal_purchase_amoutInput | number[]
    dolar_amout?: NullableFloatFieldUpdateOperationsInput | number | null
    date_credit?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateManyCategoriesInput = {
    id?: number
    name: string
    stock: number
    status?: boolean | null
    price: number
    price_ent: number
    slugs?: ProductsCreateslugsInput | string[]
    slugs_url?: ProductsCreateslugs_urlInput | string[]
    images?: string | null
    Brand?: string | null
    bundle?: number | null
    expiration?: Date | string | null
    unity?: string | null
    supplier_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type configCreateManyCategorieInput = {
    id?: number
    dolar: number
    useIva?: boolean | null
    autoPrice?: boolean | null
    profit?: number
    roundPrice?: boolean | null
    threshold?: number | null
    defafult_currency?: string | null
    expiration_default?: number | null
    bundle_discount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: FloatFieldUpdateOperationsInput | number
    price_ent?: FloatFieldUpdateOperationsInput | number
    slugs?: ProductsUpdateslugsInput | string[]
    slugs_url?: ProductsUpdateslugs_urlInput | string[]
    images?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    bundle?: NullableIntFieldUpdateOperationsInput | number | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unity?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SuppliersUpdateOneWithoutProductsNestedInput
    Records?: RecordsUpdateManyWithoutProductListNestedInput
    Purhases?: PurhasesUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: FloatFieldUpdateOperationsInput | number
    price_ent?: FloatFieldUpdateOperationsInput | number
    slugs?: ProductsUpdateslugsInput | string[]
    slugs_url?: ProductsUpdateslugs_urlInput | string[]
    images?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    bundle?: NullableIntFieldUpdateOperationsInput | number | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unity?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Records?: RecordsUncheckedUpdateManyWithoutProductListNestedInput
    Purhases?: PurhasesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: FloatFieldUpdateOperationsInput | number
    price_ent?: FloatFieldUpdateOperationsInput | number
    slugs?: ProductsUpdateslugsInput | string[]
    slugs_url?: ProductsUpdateslugs_urlInput | string[]
    images?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    bundle?: NullableIntFieldUpdateOperationsInput | number | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unity?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type configUpdateWithoutCategorieInput = {
    dolar?: FloatFieldUpdateOperationsInput | number
    useIva?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoPrice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profit?: FloatFieldUpdateOperationsInput | number
    roundPrice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    threshold?: NullableIntFieldUpdateOperationsInput | number | null
    defafult_currency?: NullableStringFieldUpdateOperationsInput | string | null
    expiration_default?: NullableIntFieldUpdateOperationsInput | number | null
    bundle_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type configUncheckedUpdateWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    dolar?: FloatFieldUpdateOperationsInput | number
    useIva?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoPrice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profit?: FloatFieldUpdateOperationsInput | number
    roundPrice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    threshold?: NullableIntFieldUpdateOperationsInput | number | null
    defafult_currency?: NullableStringFieldUpdateOperationsInput | string | null
    expiration_default?: NullableIntFieldUpdateOperationsInput | number | null
    bundle_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type configUncheckedUpdateManyWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    dolar?: FloatFieldUpdateOperationsInput | number
    useIva?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoPrice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profit?: FloatFieldUpdateOperationsInput | number
    roundPrice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    threshold?: NullableIntFieldUpdateOperationsInput | number | null
    defafult_currency?: NullableStringFieldUpdateOperationsInput | string | null
    expiration_default?: NullableIntFieldUpdateOperationsInput | number | null
    bundle_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateManySupplierInput = {
    id?: number
    name: string
    stock: number
    status?: boolean | null
    price: number
    price_ent: number
    slugs?: ProductsCreateslugsInput | string[]
    slugs_url?: ProductsCreateslugs_urlInput | string[]
    images?: string | null
    Brand?: string | null
    bundle?: number | null
    expiration?: Date | string | null
    unity?: string | null
    category_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsUpdateWithoutSupplierInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: FloatFieldUpdateOperationsInput | number
    price_ent?: FloatFieldUpdateOperationsInput | number
    slugs?: ProductsUpdateslugsInput | string[]
    slugs_url?: ProductsUpdateslugs_urlInput | string[]
    images?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    bundle?: NullableIntFieldUpdateOperationsInput | number | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unity?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Categories?: CategoriesUpdateOneWithoutProductsNestedInput
    Records?: RecordsUpdateManyWithoutProductListNestedInput
    Purhases?: PurhasesUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: FloatFieldUpdateOperationsInput | number
    price_ent?: FloatFieldUpdateOperationsInput | number
    slugs?: ProductsUpdateslugsInput | string[]
    slugs_url?: ProductsUpdateslugs_urlInput | string[]
    images?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    bundle?: NullableIntFieldUpdateOperationsInput | number | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unity?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Records?: RecordsUncheckedUpdateManyWithoutProductListNestedInput
    Purhases?: PurhasesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: FloatFieldUpdateOperationsInput | number
    price_ent?: FloatFieldUpdateOperationsInput | number
    slugs?: ProductsUpdateslugsInput | string[]
    slugs_url?: ProductsUpdateslugs_urlInput | string[]
    images?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    bundle?: NullableIntFieldUpdateOperationsInput | number | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unity?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordsUpdateWithoutProductListInput = {
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutRecordsNestedInput
  }

  export type RecordsUncheckedUpdateWithoutProductListInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordsUncheckedUpdateManyWithoutProductListInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurhasesUpdateWithoutProductsInput = {
    total_purchase_amout?: PurhasesUpdatetotal_purchase_amoutInput | number[]
    dolar_amout?: NullableFloatFieldUpdateOperationsInput | number | null
    date_credit?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutPurhasesNestedInput
  }

  export type PurhasesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    total_purchase_amout?: PurhasesUpdatetotal_purchase_amoutInput | number[]
    dolar_amout?: NullableFloatFieldUpdateOperationsInput | number | null
    date_credit?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurhasesUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    total_purchase_amout?: PurhasesUpdatetotal_purchase_amoutInput | number[]
    dolar_amout?: NullableFloatFieldUpdateOperationsInput | number | null
    date_credit?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUpdateWithoutRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: FloatFieldUpdateOperationsInput | number
    price_ent?: FloatFieldUpdateOperationsInput | number
    slugs?: ProductsUpdateslugsInput | string[]
    slugs_url?: ProductsUpdateslugs_urlInput | string[]
    images?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    bundle?: NullableIntFieldUpdateOperationsInput | number | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unity?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SuppliersUpdateOneWithoutProductsNestedInput
    Categories?: CategoriesUpdateOneWithoutProductsNestedInput
    Purhases?: PurhasesUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: FloatFieldUpdateOperationsInput | number
    price_ent?: FloatFieldUpdateOperationsInput | number
    slugs?: ProductsUpdateslugsInput | string[]
    slugs_url?: ProductsUpdateslugs_urlInput | string[]
    images?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    bundle?: NullableIntFieldUpdateOperationsInput | number | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unity?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Purhases?: PurhasesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: FloatFieldUpdateOperationsInput | number
    price_ent?: FloatFieldUpdateOperationsInput | number
    slugs?: ProductsUpdateslugsInput | string[]
    slugs_url?: ProductsUpdateslugs_urlInput | string[]
    images?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    bundle?: NullableIntFieldUpdateOperationsInput | number | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unity?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUpdateWithoutPurhasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: FloatFieldUpdateOperationsInput | number
    price_ent?: FloatFieldUpdateOperationsInput | number
    slugs?: ProductsUpdateslugsInput | string[]
    slugs_url?: ProductsUpdateslugs_urlInput | string[]
    images?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    bundle?: NullableIntFieldUpdateOperationsInput | number | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unity?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SuppliersUpdateOneWithoutProductsNestedInput
    Categories?: CategoriesUpdateOneWithoutProductsNestedInput
    Records?: RecordsUpdateManyWithoutProductListNestedInput
  }

  export type ProductsUncheckedUpdateWithoutPurhasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: FloatFieldUpdateOperationsInput | number
    price_ent?: FloatFieldUpdateOperationsInput | number
    slugs?: ProductsUpdateslugsInput | string[]
    slugs_url?: ProductsUpdateslugs_urlInput | string[]
    images?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    bundle?: NullableIntFieldUpdateOperationsInput | number | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unity?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Records?: RecordsUncheckedUpdateManyWithoutProductListNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutPurhasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: FloatFieldUpdateOperationsInput | number
    price_ent?: FloatFieldUpdateOperationsInput | number
    slugs?: ProductsUpdateslugsInput | string[]
    slugs_url?: ProductsUpdateslugs_urlInput | string[]
    images?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    bundle?: NullableIntFieldUpdateOperationsInput | number | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unity?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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