export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      profiles: {
        Row: {
          avatar_url: string | null
          email: string
          id: string
          introduce: string | null
          name: string | null
        }
        Insert: {
          avatar_url?: string | null
          email: string
          id: string
          introduce?: string | null
          name?: string | null
        }
        Update: {
          avatar_url?: string | null
          email?: string
          id?: string
          introduce?: string | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      projects: {
        Row: {
          actionplan: string | null
          created_at: string | null
          description: string | null
          due_date: string | null
          id: number
          important: number | null
          is_archive: boolean | null
          is_public: boolean | null
          review: string | null
          start_date: string | null
          state: string | null
          title: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          actionplan?: string | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          id?: number
          important?: number | null
          is_archive?: boolean | null
          is_public?: boolean | null
          review?: string | null
          start_date?: string | null
          state?: string | null
          title?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          actionplan?: string | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          id?: number
          important?: number | null
          is_archive?: boolean | null
          is_public?: boolean | null
          review?: string | null
          start_date?: string | null
          state?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      target_orders: {
        Row: {
          created_at: string | null
          id: number
          target_id: number
          target_id_order: string
          target_name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          target_id: number
          target_id_order: string
          target_name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          target_id?: number
          target_id_order?: string
          target_name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          actionplan: string | null
          created_at: string | null
          description: string | null
          detail: string | null
          done_at: string | null
          due_date: string | null
          id: number
          is_archive: boolean | null
          is_public: boolean | null
          project_id: number | null
          review: string | null
          start_date: string | null
          state: string | null
          title: string | null
          type: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          actionplan?: string | null
          created_at?: string | null
          description?: string | null
          detail?: string | null
          done_at?: string | null
          due_date?: string | null
          id?: number
          is_archive?: boolean | null
          is_public?: boolean | null
          project_id?: number | null
          review?: string | null
          start_date?: string | null
          state?: string | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          actionplan?: string | null
          created_at?: string | null
          description?: string | null
          detail?: string | null
          done_at?: string | null
          due_date?: string | null
          id?: number
          is_archive?: boolean | null
          is_public?: boolean | null
          project_id?: number | null
          review?: string | null
          start_date?: string | null
          state?: string | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      tem2p_todos: {
        Row: {
          created_at: string | null
          cur_date: string | null
          id: number
          is_archived: boolean | null
          is_completed: boolean | null
          task: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          cur_date?: string | null
          id?: number
          is_archived?: boolean | null
          is_completed?: boolean | null
          task?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          cur_date?: string | null
          id?: number
          is_archived?: boolean | null
          is_completed?: boolean | null
          task?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      temp_three_good_things: {
        Row: {
          contents: string | null
          created_at: string | null
          cur_date: string | null
          id: number
          is_archived: boolean | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          contents?: string | null
          created_at?: string | null
          cur_date?: string | null
          id?: number
          is_archived?: boolean | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          contents?: string | null
          created_at?: string | null
          cur_date?: string | null
          id?: number
          is_archived?: boolean | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      temptodos: {
        Row: {
          created_at: string | null
          display_order: number
          id: number
          is_archived: boolean | null
          is_completed: boolean | null
          task: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          display_order: number
          id?: number
          is_archived?: boolean | null
          is_completed?: boolean | null
          task?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          display_order?: number
          id?: number
          is_archived?: boolean | null
          is_completed?: boolean | null
          task?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      testdatetimeuid: {
        Row: {
          created_at: string | null
          id: number
          updated_at: string | null
          user_uid: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          updated_at?: string | null
          user_uid?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          updated_at?: string | null
          user_uid?: string | null
        }
        Relationships: []
      }
      testtodo: {
        Row: {
          id: number
          isarchived: boolean | null
          iscompeted: boolean | null
          title: string | null
        }
        Insert: {
          id?: number
          isarchived?: boolean | null
          iscompeted?: boolean | null
          title?: string | null
        }
        Update: {
          id?: number
          isarchived?: boolean | null
          iscompeted?: boolean | null
          title?: string | null
        }
        Relationships: []
      }
      three_good_things: {
        Row: {
          contents: string | null
          created_at: string | null
          cur_date: string | null
          id: number
          is_archived: boolean | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          contents?: string | null
          created_at?: string | null
          cur_date?: string | null
          id?: number
          is_archived?: boolean | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          contents?: string | null
          created_at?: string | null
          cur_date?: string | null
          id?: number
          is_archived?: boolean | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      todo_table_infos: {
        Row: {
          contents: string | null
          created_at: string | null
          id: number
          tablename: string | null
          target: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          contents?: string | null
          created_at?: string | null
          id?: number
          tablename?: string | null
          target?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          contents?: string | null
          created_at?: string | null
          id?: number
          tablename?: string | null
          target?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      todos: {
        Row: {
          created_at: string | null
          id: number
          is_archived: boolean | null
          is_completed: boolean | null
          task: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          is_archived?: boolean | null
          is_completed?: boolean | null
          task?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          is_archived?: boolean | null
          is_completed?: boolean | null
          task?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "buckets_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "objects_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
